import Bar from "@/components/Bar";
import { DatePicker, Input, Space } from "antd";
import "./index.scss";
import {
  ProCard,
  ProForm,
  ProFormDateRangePicker,
  ProFormText,
} from "@ant-design/pro-components";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { useEffect, useState } from "react";
import { http } from "@/utils";

const { RangePicker } = DatePicker;

function Home() {
  const [params, setParams] = useState({});

  async function submitForm(values) {
    setParams(values);
    const res = await http.get("/amazon/analyze-data/list", { ...params });
    console.log(res);
  }

  return (
    <div style={{ height: "100%" }}>
      <ProCard
        title="数据分析"
        extra={
          <ProForm
            layout={"horizontal"}
            onFinish={submitForm}
            style={{ height: "100%" }}
          >
            <Space>
              <ProFormDateRangePicker
                transform={(values) => {
                  return {
                    startTime: values ? values[0] : undefined,
                    endTime: values ? values[1] : undefined,
                  };
                }}
                name={"dateRange"}
                locale={locale}
                required={true}
              />
              <ProFormText
                name={"asin"}
                style={{ width: "100px", marginRight: "10px" }}
                required={true}
              />
            </Space>
          </ProForm>
        }
      ></ProCard>
    </div>
  );
}
export default Home;
