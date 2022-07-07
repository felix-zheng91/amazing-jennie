import "./index.scss";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ProCard, ProTable } from "@ant-design/pro-components";
import { Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import { http } from "@/utils";
import columnConstant from "@/constant/columnConstant";

const AnalyzeData = () => {
  const [analyzeData, setAnalyzeData] = useState({ list: [], count: 0 });
  const { list, count } = analyzeData;

  const [params, setParams] = useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const loadAnalyzeData = async () => {
      const res = await http.get("/amazon/analyze-data/list", { params });
      const { records, total } = res.data;
      setAnalyzeData({
        list: records,
        count: total,
      });
    };
    loadAnalyzeData().then();
  }, [params]);

  const changePage = (current, pageSize) => {
    setParams({
      ...params,
      current: current,
      pageSize: pageSize,
    });
  };

  const changePageSize = (current, pageSize) => {
    setParams({
      ...params,
      current: pageSize,
      pageSize: 1,
    });
  };

  const downloadAd = () => {
    window.open("http://localhost:8080/api/amazon/analyze-data/download");
  };

  return (
    <div className="publish">
      <ProCard
        headerBordered={true}
        title={
          <Breadcrumb separator={">"}>
            <Breadcrumb.Item>
              <Link to={"/"}>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>AnalyzeData 管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <ProTable
          id={"analyze-table"}
          scroll={{ x: 1300 }}
          sticky={{
            getContainer: () => document.getElementById("analyze-table"),
          }}
          bordered
          dataSource={list}
          rowKey={"id"}
          pagination={{
            showSizeChanger: true,
            onChange: changePage,
            onShowSizeChange: changePageSize,
            defaultCurrent: 1,
            defaultPageSize: 10,
            total: count,
            pageSizeOptions: [1, 5, 10, 20, 50, 100],
            showQuickJumper: true,
          }}
          columns={columnConstant.analyzeDataColumns}
          search
          request={async (params = {}, sort, filter) => {
            const res = await http.get("/amazon/analyze-data/list", {
              params,
            });
            const { records, total } = res.data;
            setAnalyzeData({
              list: records,
              count: total,
            });
          }}
          dateFormatter="string"
          headerTitle={`查询到 ${count} 条数据`}
          toolBarRender={() => [
            <Button
              icon={<DownloadOutlined />}
              type={"primary"}
              onClick={downloadAd}
            >
              下载
            </Button>,
          ]}
        />
      </ProCard>
    </div>
  );
};
export default observer(AnalyzeData);
