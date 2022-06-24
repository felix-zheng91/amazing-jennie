import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  message,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { http } from "@/utils";

const { Option } = Select;

/*const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });*/

const Publish = () => {
  const navigator = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");

  const formRef = useRef();

  useEffect(() => {
    const loadDetail = async () => {
      const res = await http.get(`/mp/articles/${id}`);
      const formData = { ...res.data };
      const cover = formData.cover;
      setFileList(
        cover.images.map((image) => {
          return { url: image };
        })
      );
      cacheImages.current = cover.images.map((image) => {
        return { url: image };
      });
      formRef.current.setFieldsValue({ ...formData, type: cover.type });
    };
    if (id) {
      loadDetail();
    }
    return () => {};
  }, [id]);

  const cacheImages = useRef([]);

  const submitContent = async (values) => {
    console.log(values);
    const { channel_id, content, type, title } = values;
    const images = fileList
      .map((file) => {
        return file.url;
      })
      .concat();
    const params = {
      channel_id,
      content,
      type,
      title,
      cover: { type: type, images: images },
    };
    console.log(params);
    if (id) {
      await http.put(`/mp/articles/${id}?draft=false`, params);
    }
    await http.post("/mp/articles?draft=false", params);

    navigator("/article");
    message.success(`${id ? "更新" : "发布"}成功`);
  };

  const { channelStore } = useStore();

  /*const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");*/
  const [fileList, setFileList] = useState([]);
  const [picSize, setPicSize] = useState(1);

  const onUploadChange = ({ fileList }) => {
    const newFileList = fileList.map((file) => {
      if (file.response) {
        return { url: file.response.data.url };
      }
      return file;
    });
    setFileList(newFileList);
    cacheImages.current = newFileList;
  };

  /*const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };*/
  // const handleCancel = () => setPreviewVisible(false);

  const changePicSize = (event) => {
    setPicSize(event.target.value);
    setFileList(cacheImages.current.slice(0, event.target.value));
  };

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb separator={">"}>
            <Breadcrumb.Item>
              <Link to={"/home"}>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{id ? "编辑" : "发布"}文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          ref={formRef}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1, content: "" }}
          onFinish={submitContent}
        >
          <Form.Item
            label={"标题"}
            name={"title"}
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder={"请输入文章标题"} style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label={"频道"}
            name={"channel_id"}
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select
              placeholder={"请选择文章频道"}
              style={{ width: 400 }}
              allowClear
            >
              {channelStore.channels.map((channel) => {
                return (
                  <Option key={channel.id} value={channel.id}>
                    {channel.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item label={"封面"}>
            <Form.Item name={"type"}>
              <Radio.Group onChange={changePicSize} value={picSize}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            <Upload
              name={"image"}
              listType={"picture-card"}
              className={"avatar-uploader"}
              action={"http://geek.itheima.net/v1_0/upload"}
              fileList={fileList}
              onChange={onUploadChange}
              showUploadList
              // onPreview={handlePreview}
              progress={{ type: "line", showInfo: true }}
              multiple={picSize > 1}
              maxCount={picSize}
            >
              {/*{fileList.length >= picSize ? null : (*/}
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
              {/*// )}*/}
            </Upload>
            {/*<Modal*/}
            {/*  visible={previewVisible}*/}
            {/*  title={previewTitle}*/}
            {/*  footer={null}*/}
            {/*  onCancel={handleCancel}*/}
            {/*>*/}
            {/*  <img*/}
            {/*    alt="example"*/}
            {/*    style={{*/}
            {/*      width: "100%",*/}
            {/*    }}*/}
            {/*    src={previewImage}*/}
            {/*  />*/}
            {/*</Modal>*/}
          </Form.Item>
          <Form.Item
            label={"内容"}
            name={"content"}
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill></ReactQuill>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size={"large"} type={"primary"} htmlType={"submit"}>
                {id ? "更新" : "发布"}文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default observer(Publish);
