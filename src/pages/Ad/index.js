import "./index.scss";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ProCard, ProTable } from "@ant-design/pro-components";
import { Breadcrumb, Button, message, Upload } from "antd";
import { Link } from "react-router-dom";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { http } from "@/utils";
import columnConstant from "@/constant/columnConstant";

const Ad = () => {
  const [adList, setAdList] = useState({ list: [], count: 0 });
  const { list, count } = adList;

  const [params, setParams] = useState({
    current: 1,
    pageSize: 10,
  });

  const [uploadLoading, setUploadLoading] = useState(false);

  const props = {
    beforeUpload: (file) => {
      const isExcel =
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel";

      if (!isExcel) {
        message.error(`${file.name} is not a Excel file`);
      }
      setUploadLoading(true);
      return isExcel || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      if (info.file.status !== "uploading") {
        setUploadLoading(false);
      }
    },
  };

  useEffect(() => {
    const loadSkuAsinRel = async () => {
      const res = await http.get("/amazon/ad/list", { params });
      const { records, total } = res.data;
      setAdList({
        list: records,
        count: total,
      });
    };
    loadSkuAsinRel().then();
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
    window.open("http://localhost:8080/api/amazon/ad/download");
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
            <Breadcrumb.Item>AD 管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <ProTable
          id={"ad-table"}
          bordered
          sticky={{ getContainer: () => document.getElementById("ad-table") }}
          scroll={{ x: 1300 }}
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
          columns={columnConstant.adDataColumns}
          search={false}
          dateFormatter="string"
          headerTitle={`查询到 ${count} 条数据`}
          toolBarRender={() => [
            <Upload
              {...props}
              accept={
                'accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"'
              }
              action={"http://localhost:8080/api/amazon/ad/upload"}
              showUploadList={false}
              maxCount={1}
            >
              <Button
                icon={<UploadOutlined />}
                loading={uploadLoading}
                type={"primary"}
              >
                上传
              </Button>
            </Upload>,
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
export default observer(Ad);
