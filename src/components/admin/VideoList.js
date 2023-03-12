import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helpers/app-context";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "desc",
  },
  {
    title: "Url",
    dataIndex: "url",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
export const VideoList = () => {
  const ctx = useContext(AppContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const result = await ctx.HttpGet("video");
    if (result.status === true) {
      setVideos(result.data);
    }
  };
  const data = [];
  for (let i = 0; i < videos.length; i++) {
    data.push({
      key: i + 1,
      title: videos[i].title.substr(0, 70),
      desc: videos[i].desc.substr(0, 70),
      url: (
        <a className="d-block" target={"_blank"} href={videos[i].url}>
          <GrView className="text-danger fs-3" />
        </a>
      ),
      action: (
        <>
          <Link to={"/admin/video/1"} className="mx-3">
            <FaRegEdit className="text-danger fs-3" />
          </Link>
          <Button className="mx-3 border border-0">
            <AiFillDelete className="text-danger fs-3" />
          </Button>
        </>
      ),
    });
  }
  return (
    <div>
      <h5>Videos</h5>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
