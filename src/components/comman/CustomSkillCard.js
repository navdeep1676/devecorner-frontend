import React from "react";

export const CustomSkillCard = (props) => {
  const { data } = props;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className="col-12 col-sm-6 col-lg-3 mt-sm-5 " key={index}>
            <div
              className="skill-card"
              style={{ borderBottom: `2px solid ${item?.color}` }}
            >
              <div
                className="icon-clip"
                style={{ backgroundColor: item?.color }}
              >
                <img src={item.image} className="img-fluid" alt="ui" />
              </div>
              <h1 className="mb-3 fs-3">{item?.name}</h1>
              <p className="fs-4">{item?.level}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
