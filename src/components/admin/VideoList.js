import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helpers/app-context";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { CustomModal } from "./comman/CustomModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ctx = useContext(AppContext);
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  console.log(videoId);
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
          <Button
            onClick={() => {
              setIsModalOpen(true);
              setVideoId(videos[i]?._id);
            }}
            className="mx-3 border border-0"
          >
            <AiFillDelete className="text-danger fs-3" />
          </Button>
        </>
      ),
    });
  }

  const deleteVideo = async (id) => {
    const result = await ctx.HttpDelete("video/" + id);
    if (result.status === true) {
      setIsModalOpen(false);
      ctx.setModalData({
        icon: "",
        showModal: true,
        titleText: "Delete Video",
        messageText: result.msg,
        secondaryBtnClassName: "btn-primary",
        secondaryBtnText: "Done",
        type: "success",
      });
      getVideos();
    }
  };
  return (
    <div>
      <h5>Videos</h5>
      <Table columns={columns} dataSource={data} />
      <CustomModal
        title="Delete Video"
        isModalOpen={isModalOpen}
        primaryBtnText={"Yes"}
        secondaryBtnText={"No"}
        secondaryBtnClassName={"btn-danger"}
        handlePrimaryBtn={() => deleteVideo(videoId)}
        handleSecondaryBtn={() => setIsModalOpen(false)}
        modalBody={"Are You Sure You Want to Delete this Video?"}
        setIsModalOpen={() => setIsModalOpen(false)}
      />
    </div>
  );
};
