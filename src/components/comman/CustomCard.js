import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
export const CustomCard = (props) => {
  const { data, type } = props;
  const navigate = useNavigate();
  const goToPage = (slug) => {
    navigate(`/${type}/${slug}`);
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="d-block col-12 col-sm-6 col-lg-4 mt-4 mt-lg-4"
          >
            <Card style={{ width: "100%" }}>
              <Card.Img
                onClick={() => goToPage(item?.slug)}
                variant="top"
                className="cursor-pointer"
                src={item?.image?.url}
              />
              <Card.Body>
                <Card.Title
                  onClick={() => goToPage(item?.slug)}
                  className="text-decoration-none cursor-pointer"
                >
                  {" "}
                  {item?.title.substr(0, 49) + "..."}
                </Card.Title>
                <Card.Text
                  onClick={() => goToPage(item?.slug)}
                  className="text-decoration-none cursor-pointer"
                >
                  {item?.desc.substr(0, 140) + "..."}
                </Card.Text>
                <a className="button mt-4" href={item?.url} target={"_blank"}>
                  Explore Now
                </a>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};
