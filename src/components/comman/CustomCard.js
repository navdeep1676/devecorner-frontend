import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export const CustomCard = (props) => {
  const { data, type } = props;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/admin/video/${item.slug}`}
            className="d-block col-12 col-sm-6 col-lg-4 mt-4 mt-lg-4"
          >
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.image.url} />
              <Card.Body>
                <Card.Title className="text-decoration-none">
                  {" "}
                  {item.title.substr(0, 49) + "..."}
                </Card.Title>
                <Card.Text className="text-decoration-none">
                  {item.desc.substr(0, 140) + "..."}
                </Card.Text>
                <a className="button mt-4" href={item.url} target={"_blank"}>
                  Explore Now
                </a>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </>
  );
};
