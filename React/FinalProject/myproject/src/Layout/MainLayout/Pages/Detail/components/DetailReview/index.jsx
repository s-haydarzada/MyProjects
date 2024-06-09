import React from "react";
import { Avatar, Tabs } from "antd";
import { MdStarRate } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const { TabPane } = Tabs;

const DetailReview = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Description",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      key: "2",
      label: "Review",
      content: (
        <div className="flex flex-col">
          <div className="flex items-start justify-start flex-col mb-5 border-b-2 pb-10">
            <h3 className="text-[40px] font-bold mb-3">Customer Reviews</h3>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-3xl mr-2">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <span className="text-[18px] ml-2">Based on 7 reviews</span>
            </div>
          </div>
          <div className="flex items-start justify-start flex-col mb-5 border-b-2 pb-10">
            <div className="flex gap-1 text-3xl mr-2">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p>Awesome shipping service!</p>
            <b className="pt-2">Nantu Nayal on Sep 30, 2018</b>
            <p className="text-left pt-3">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col">
            <div className="flex gap-1 text-3xl mr-2">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p>Awesome shipping service!</p>
            <b className="pt-2">Nantu Nayal on Sep 30, 2018</b>
            <p className="text-left pt-3">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Comments",
      content: (
        <div className="flex flex-col items-start mx-10 justify-start">
          <p className="mb-3">1 comment</p>
          <div className="flex">
            <Avatar shape="square" className="flex items-center justify-center mr-3" size={64} icon={<FaUser />} />
            <input className="px-96" type="text" name="" id="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto flex items-center justify-center">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        size="large"
        tabBarGutter={30}
        centered
        className="text-center"
      >
        {items.map((item) => (
          <TabPane tab={item.label} key={item.key}>
            <div className="p-10 w-full border">{item.content}</div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default DetailReview;
