import React from "react";
import Card from "react-bootstrap/Card";
export const CustomCard = (props) => {
  const { data } = props;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.image.url} />
              <Card.Body>
                <Card.Title>{item.title.substr(0, 49) + "..."}</Card.Title>
                <Card.Text>{item.desc.substr(0, 140) + "..."}</Card.Text>
                <a className="button mt-4" href={item.link} target={"_blank"}>
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
