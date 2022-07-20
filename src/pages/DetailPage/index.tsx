import { FC, useState } from "react";
import { ProCard, ProTable } from "@ant-design/pro-components";
import defaultProps from "./_defaultProps";
import axios from "axios";
import { Button, message, Upload } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { useAntdTable, usePagination } from "ahooks";

const DetailPage: FC = () => {
  const [detailList, setDetailList] = useState({ list: [], count: 0 });
  const { list, count } = detailList;

  const [uploadLoading, setUploadLoading] = useState(false);

  const [params, setParams] = useState({
    current: 1,
    pageSize: 10,
  });

  const changePage = (current: number, pageSize: number) => {
    setParams({
      ...params,
      current: current,
      pageSize: pageSize,
    });
  };

  const changePageSize = (current: number, pageSize: number) => {
    setParams({
      ...params,
      current: pageSize,
      pageSize: 1,
    });
  };

  const downloadAd = () => {
    window.open("http://localhost:8080/api/amazon/detail-data/download");
  };

  return (
    <div className={"detail-data"}>
      <ProCard title={"详细数据"}>
        <ProTable
          id={"detail-table"}
          bordered
          search={{}}
          sticky={{
            getContainer: () => {
              return document.getElementById("detail-table") || window;
            },
          }}
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
            pageSizeOptions: [10, 20, 50, 100],
            showQuickJumper: true,
          }}
          {...defaultProps}
          dateFormatter="string"
          headerTitle={`查询到 ${count} 条数据`}
          request={async (params, sort, filter) => {
            const res = await axios.get("/api/amazon/detail-data/list", {
              params,
            });
            console.log(res);
            const { records, total } = res.data.data;
            setDetailList({
              list: records,
              count: total,
            });
          }}
          toolBarRender={() => [
            <Upload
              beforeUpload={(file) => {
                const isExcel =
                  file.type ===
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                  file.type === "application/vnd.ms-excel";

                if (!isExcel) {
                  message
                    .error(`${file.name} is not a Excel file`)
                    .then((r) => {});
                }
                setUploadLoading(true);
                return isExcel || Upload.LIST_IGNORE;
              }}
              onChange={(info) => {
                if (info.file.status !== "uploading") {
                  setUploadLoading(false);
                }
              }}
              accept={
                'accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"'
              }
              action={"http://localhost:8080/api/amazon/detail-data/upload"}
              showUploadList={false}
              maxCount={1}
            >
              <Button
                icon={<UploadOutlined />}
                loading={uploadLoading}
                type={"text"}
                shape={"circle"}
              />
            </Upload>,
            <Button
              icon={<DownloadOutlined />}
              type={"text"}
              onClick={downloadAd}
              shape={"circle"}
            />,
          ]}
        />
      </ProCard>
    </div>
  );
};

export default DetailPage;
