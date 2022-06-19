import {
  Breadcrumb,
  Button,
  Card,
  DatePicker,
  Form,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import locale from "antd/es/date-picker/locale/zh_CN";
import "./index.scss";
import "moment/locale/zh-cn";
import img404 from "@/assets/error.png";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { http } from "@/utils";
import axios from "axios";

const { Option } = Select;
const { RangePicker } = DatePicker;
const Article = () => {
  const [channels, setChannels] = useState([]);
  const [articles, setArticles] = useState({ list: [], count: 0 });
  const { list, count } = articles;
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
  });

  useEffect(() => {
    const loadArticles = async () => {
      const res = await http.get("/mp/articles", { params });
      const { results, total_count } = res.data;
      setArticles({
        list: results,
        count: total_count,
      });
    };
    loadArticles();
  }, [params]);

  useEffect(() => {
    const loadChannels = async () => {
      const res = await http.get("/channels");
      setChannels(res.data.channels);
    };
    loadChannels().then(() => {});
  }, []);

  const submitSearch = (values) => {
    const { channel_id, status, date } = values;
    const _params = {};
    if (status !== -1) {
      _params.status = status;
    }
    if (channel_id) {
      _params.channel_id = channel_id;
    }
    if (date) {
      _params.begin_pubdate = date[0].format("yyyy-MM-DD");
      _params.end_pubdate = date[1].format("yyyy-MM-DD");
    }
    setParams(_params);
  };

  const changePage = (current, pageSize) => {
    setParams({
      ...params,
      page: current,
      per_page: pageSize,
    });
  };

  const changePageSize = (current, pageSize) => {
    setParams({
      ...params,
      per_page: pageSize,
      page: 1,
    });
  };

  const deleteArticle = async (data) => {
    await http.delete(`/mp/articles/${data.id}`);
    setParams({
      ...params,
      page: 1,
    });
  };

  const columns = [
    {
      title: "封面",
      dataIndex: "cover",
      render: (cover) => {
        return (
          <img
            src={cover.images[0] || img404}
            width={200}
            height={150}
            alt={""}
          />
        );
      },
    },
    {
      title: "标题",
      dataIndex: "title",
      width: 220,
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (data) => <Tag color={"green"}>审核通过</Tag>,
    },
    {
      title: "发布时间",
      dataIndex: "pubdate",
    },
    {
      title: "阅读数",
      dataIndex: "read_count",
    },
    {
      title: "评论数",
      dataIndex: "comment_count",
    },
    {
      title: "点赞数",
      dataIndex: "like_count",
    },
    {
      title: "操作",
      render: (data) => {
        return (
          <Space size={"middle"}>
            <Button type={"primary"} shape={"circle"} icon={<EditOutlined />} />
            <Popconfirm
              title={"确认删除？"}
              onConfirm={() => deleteArticle(data)}
            >
              <Button
                type={"primary"}
                shape={"circle"}
                icon={<DeleteOutlined />}
                danger={true}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Card
        title={
          <Breadcrumb separator={">"}>
            <Breadcrumb.Item>
              <Link to={"/home"}>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: -1 }} onFinish={submitSearch}>
          <Form.Item label={"状态"} name={"status"}>
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={"频道"} name={"channel_id"}>
            <Select
              placeholder={"请选择文章频道"}
              style={{ width: 160 }}
              allowClear={true}
            >
              {channels.map((channel) => {
                return (
                  <Option key={channel.id} value={channel.id}>
                    {channel.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item label={"日期"} name={"date"}>
            <RangePicker locale={locale} inputReadOnly={true}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button
              type={"primary"}
              htmlType={"submit"}
              style={{ marginLeft: 80 }}
            >
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`查询到 ${count} 条数据`}>
        <Table
          rowKey={"id"}
          columns={columns}
          dataSource={list}
          bordered={true}
          pagination={{
            showSizeChanger: true,
            onChange: changePage,
            onShowSizeChange: changePageSize,
            defaultCurrent: 1,
            defaultPageSize: 10,
            total: count,
            pageSizeOptions: [1, 5, 10, 20, 50, 100],
          }}
        ></Table>
      </Card>
    </div>
  );
};
export default Article;
