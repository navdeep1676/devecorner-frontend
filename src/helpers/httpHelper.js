import axios from "axios";
import querystring from "querystring";

const HttpMethods = {
  Get: "get",
  Put: "put",
  Post: "post",
  Delete: "delete",
};

const ResponseStatus = {
  Success: 0,
  Error: 1,
};

export class HttpHelper {
  static #context;

  static SetContext(aContext) {
    HttpHelper.#context = aContext;
  }
  static #MakeHeader(hasContent) {
    let oHeader = {};
    /* if (hasContent) oHeader["type"] = "formData"; */
    if (HttpHelper.#context?.AccessToken) {
      oHeader["Authorization"] = HttpHelper.#context.AccessToken;
    }

    return oHeader;
  }
  static #MakeUrl(aFunction, aParams) {
    let oURL;
    if (HttpHelper.#context?.BaseURL)
      oURL = HttpHelper.#context?.BaseURL + aFunction;
    else oURL = aFunction;

    if (aParams) oURL += "?" + querystring.stringify(aParams);
    return oURL;
  }

  static HttpGet = async (aFunction, aParams) => {
    const oURL = HttpHelper.#MakeUrl(aFunction, aParams);
    const oHeader = HttpHelper.#MakeHeader(false);

    const oResult = await HttpHelper.#HttpCall(
      HttpMethods.Get,
      oURL,
      oHeader,
      null
    );
    return oResult;
  };

  static HttpPost = async (aFunction, aPayload) => {
    const oURL = HttpHelper.#MakeUrl(aFunction);
    const oHeader = HttpHelper.#MakeHeader(true);

    const oResult = await HttpHelper.#HttpCall(
      HttpMethods.Post,
      oURL,
      oHeader,
      aPayload
    );
    return oResult;
  };

  static HttpPut = async (aFunction, aPayload) => {
    const oURL = HttpHelper.#MakeUrl(aFunction);
    const oHeader = HttpHelper.#MakeHeader(true);

    const oResult = await HttpHelper.#HttpCall(
      HttpMethods.Put,
      oURL,
      oHeader,
      aPayload
    );
    return oResult;
  };

  static HttpDelete = async (aFunction, aParams) => {
    const oURL = HttpHelper.#MakeUrl(aFunction, aParams);
    const oHeader = HttpHelper.#MakeHeader(false);

    const oResult = await HttpHelper.#HttpCall(
      HttpMethods.Delete,
      oURL,
      oHeader,
      null
    );
    return oResult;
  };

  static #HttpCall = async (
    aMethod,
    aUrl,
    aHeaders,
    aPayload,
    aFileDownload = false
  ) => {
    let oResponse;
    let errorMessage;
    try {
      if (aMethod === HttpMethods.Get) {
        oResponse = await axios.get(aUrl, { headers: aHeaders });
      } else if (aMethod === HttpMethods.Post) {
        oResponse = await axios.post(aUrl, aPayload, { headers: aHeaders });
      } else if (aMethod === HttpMethods.Put) {
        oResponse = await axios.put(aUrl, aPayload, { headers: aHeaders });
      } else if (aMethod === HttpMethods.Delete) {
        oResponse = await axios.delete(aUrl, { headers: aHeaders });
      }

      // Should never happen
      else errorMessage = "HTTP Method not supported";
    } catch (e) {
      errorMessage = e.message;
      if (e.response) {
        oResponse = e.response;
        if (oResponse.statusText && oResponse.statusText !== "")
          errorMessage = oResponse.statusText;
      }
    }
    if (!oResponse) throw new ServiceUnavailableError(errorMessage);

    if (oResponse.status === 401 || oResponse.status === 403)
      throw new AuthenticationError(errorMessage);

    // The first .data is from axios
    let oResult = oResponse?.data;
    if (oResponse.status === 200) {
      return aFileDownload ? oResponse : oResult;
    } else if (!oResult) {
      throw new Error(errorMessage);
    }
    //Session Timeout
    else if (oResult.Status === ResponseStatus.InvalidSession) {
      throw new SessionTimeoutError(
        oResult.Message ? oResult.Message : errorMessage
      );
    }
    //Account Locked
    else if (oResult.Status === ResponseStatus.UserLocked) {
      throw new UserLockedError(
        oResult.Message ? oResult.Message : errorMessage
      );
    }
    // API Error
    else {
      throw new Error(oResult.Message ? oResult.Message : errorMessage);
    }
  };
}

export class ServiceUnavailableError extends Error {
  constructor() {
    super();
    this.message = "Service did not respond in a timely manner.";
  }
}

export class AuthenticationError extends Error {
  constructor() {
    super();
    this.message = "Unauthorized";
  }
}

export class SessionTimeoutError extends Error {
  constructor() {
    super();
    if (!this.message) this.message = "User Session timed out.";
  }
}

export class UserLockedError extends Error {
  constructor() {
    super();
    if (!this.message) this.message = "User Account is locked.";
  }
}
