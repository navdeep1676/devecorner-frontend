import React, { useState, createContext, useEffect } from "react";
import { CustomModal } from "../components/comman/CustomModal";
import { HttpHelper } from "./httpHelper";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [baseURL, setBaseURL] = useState(null);
  const [history, setHistory] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [userType, setUserType] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [modalData, setModalData] = useState({
    icon: "",
    showModal: false,
    titleText: "",
    messageText: "",
    showCancelButton: false,
    confirmButtonText: "Okay",
    type: null,
  });
  useEffect(() => {
    if (localStorage.getItem("role") !== "") {
      setUserType(localStorage.getItem("role"));
    }
  }, []);
  const SetHttpContext = async (aAccessToken) => {
    let webURL = "https://api.developerscorner.in/v1/";
    // USE global variable which can be changed during depoy rather than build. this is defined in env.js file inside public folder.
    if (window.hasOwnProperty("REACT_APP_API_ENDPOINT")) {
      webURL = "https://api.developerscorner.in/v1/";
      if (webURL.endsWith("/")) webURL = webURL.substring(0, webURL.length - 1);

      setBaseURL("https://api.developerscorner.in/v1/");
    } else {
      setBaseURL("https://api.developerscorner.in/v1/");
    }

    let oContext = {
      BaseURL: "https://api.developerscorner.in/v1/",
      AccessToken: aAccessToken,
    };
    HttpHelper.SetContext(oContext);
  };

  const HttpGet = async (
    aFunction,
    aParams,
    aShowLoader = true,
    aIsCritical = true
  ) => {
    try {
      // if (aShowLoader) setShowSpinner(true);
      await getAccessToken();
      return await HttpHelper.HttpGet(aFunction, aParams);
    } catch (e) {
      // ErrorHandler(e, aIsCritical);
    } finally {
      // if (aShowLoader) setShowSpinner(false);
    }
    return false;
  };

  const HttpPost = async (aFunction, aPayload, aShowLoader = true) => {
    try {
      // if (aShowLoader) setShowSpinner(true);
      await getAccessToken();

      return await HttpHelper.HttpPost(aFunction, aPayload);
    } catch (e) {
      // ErrorHandler(e, true)
    } finally {
      // if (aShowLoader) setShowSpinner(false);
    }
    return false;
  };
  const HttpDelete = async (aFunction, aPayload, aShowLoader = true) => {
    try {
      // if (aShowLoader) setShowSpinner(true);
      await getAccessToken();

      return await HttpHelper.HttpDelete(aFunction, aPayload);
    } catch (e) {
      // ErrorHandler(e, true)
    } finally {
      // if (aShowLoader) setShowSpinner(false);
    }
    return false;
  };

  const AppLogin = async (data, aAccessToken) => {
    await SetHttpContext(data, aAccessToken);
    let apiResponse = await HttpPost("user-login", data);
    if (apiResponse) {
      const accessObj = apiResponse.features;
      let accesses = [];
      if (accessObj) {
        accessObj.forEach((accessSet) =>
          accessSet.apis.forEach((api) => accesses.push(api))
        );
      }
      setUserType(apiResponse.role);
      setUserInfo({
        code: apiResponse.code,
        msg: apiResponse.msg,
        show_password_reset: apiResponse.show_password_reset,
        password_reset_id: apiResponse.password_reset_id
          ? apiResponse.password_reset_id
          : "",
        token: apiResponse.token,
        device_id: apiResponse.device_id,
        role: apiResponse.role,
      });
    }

    return apiResponse;
  };

  const getAccessToken = async () => {
    const getToken = localStorage.getItem("app_tk");
    await SetHttpContext(getDecrypted(getToken));
  };
  const AppLogout = async (callLogoutApi = true) => {
    try {
      await getAccessToken();
      if (callLogoutApi) {
        return await HttpPost("auth/user-logout", null);
      }
    } catch (e) {
      // showToastAlert({ type: 'error', message: e.message })
    } finally {
      if (callLogoutApi) {
        setIsLogout(true);
      }
      HttpHelper.SetContext(null);
    }
  };

  const getTitle = (id, features) => {
    let result;

    features.forEach((item) => {
      if (item.id === id) {
        result = { title: item.name, subTitle: item.description };
      } else if (item.submenu?.length && !result) {
        const result1 = getTitle(id, item.submenu);
        if (result1) result = result1;
      }
    });
    return result;
  };

  const getEncrypted = (str) => {
    return btoa(str);
  };

  const getDecrypted = (str) => {
    return atob(str);
  };
  const makeFirstLetterUppercase = (word) => {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  };
  const toggleShow = () => setShow(!show);
  const [toastData, setToastData] = useState({
    message: "",
    type: "",
    info: "",
  });
  const [show, setShow] = useState(false);
  const setSelectedData = (input, field1, field2, field3) => {
    let output = [];
    for (let i = 0; i < input.length; ++i)
      if (Number(input[i][field3] === 1))
        output.push({
          team_player_id: input[i][field1],
          is_captain: input[i][field2],
        });
    return output;
  };
  const getTeamData = async () => {
    const result = await HttpGet(`auth/${userType}/view-team`);
    if (result.status === true) {
      setTeamData(result.data);
    } else {
      setShow(true);
      setToastData({
        message: result.msg || "Something went wrong!",
        type: "danger",
        info: "Team Info",
      });
    }
  };

  const contextValue = {
    setSelectedData,
    show,
    setShow,
    toastData,
    setToastData,
    toggleShow,
    getTitle,
    isLogout,
    AppLogin,
    AppLogout,
    HttpGet,
    HttpPost,
    userInfo,
    setUserInfo,
    getEncrypted,
    getDecrypted,
    makeFirstLetterUppercase,
    setTeamData,
    teamData,
    getTeamData,
    userType,
    setModalData,
    HttpDelete,
    pageTitle,
    setPageTitle,
  };
  const onErrorModalButtonClick = () => {
    setModalData({ ...modalData, showModal: false });
  };
  return (
    <AppContext.Provider value={contextValue}>
      {children}
      <CustomModal
        icon={modalData.icon}
        isModalOpen={modalData.showModal}
        title={modalData.titleText}
        modalBody={modalData.messageText}
        secondaryBtnClassName={modalData.secondaryBtnClassName}
        secondaryBtnText={modalData.secondaryBtnText}
        handleSecondaryBtn={() => onErrorModalButtonClick()}
      />
    </AppContext.Provider>
  );
};
