import React from "react";
import Card from "react-bootstrap/Card";
export const CustomCard = (props) => {
  const { data } = props;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.image.url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
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
