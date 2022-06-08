import React, { Component } from "react";
import { Button, Input, Popconfirm, Table } from "antd";
import "./App.css";
import axios from "axios";

// 解构
const { Search } = Input;

class App extends Component {
  state = {
    dataSource: [
      // {
      //   key: "1",
      //   name: "胡彦斌",
      //   age: 32,
      //   address: "西湖区湖底公园1号",
      // },
      // {
      //   key: "2",
      //   name: "胡彦祖",
      //   age: 42,
      //   address: "西湖区湖底公园1号",
      // },
    ],

    columns: [
      {
        title: "姓名",
        dataIndex: "realName",
        key: "realName",
        width: "20%",
      },
      {
        title: "电话",
        dataIndex: "phone",
        key: "phone",
        width: "20%",
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "操作",
        width: "20%",
        render: (_, record) => (
          <Popconfirm
            title={"确认删除?"}
            onConfirm={() => this.delete(record.id)}
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        ),
      },
    ],
  };

  delete = async (id) => {
    console.log("delete ", id);
    const res = await axios.post("http://localhost:8080/user/remove", {
      id: id,
    });
    if (res.data.data) {
      await this.loadDataSource();
    } else {
      alert("删除失败");
    }
  };

  loadDataSource = async () => {
    const res = await axios.get("http://localhost:8080/user/list");
    // console.log(res);
    this.setState({
      dataSource: res.data.data,
    });
  };

  componentDidMount() {
    console.log("Mounted");
    this.loadDataSource().then(() => {});
  }

  onSearch = async (value) => {
    const res = await axios.get("http://localhost:8080/user/list", {
      params: {
        realName: value,
      },
    });

    this.setState({
      dataSource: res.data.data,
    });
  };

  render() {
    return (
      <div className="container">
        <Search
          style={{ marginTop: "20px" }}
          placeholder="input search text"
          onSearch={this.onSearch}
          enterButton
        />

        <Button type={"primary"} style={{ margin: "12px 0 12px 0" }}>
          新增
        </Button>

        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          rowKey="id"
        />
      </div>
    );
  }
}

export default App;
