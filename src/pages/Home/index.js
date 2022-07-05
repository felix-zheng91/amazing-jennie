import { Empty, Space } from "antd";
import "./index.scss";
import {
  ProCard,
  ProForm,
  ProFormDateRangePicker,
  ProFormText,
} from "@ant-design/pro-components";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { useEffect, useRef, useState } from "react";
import { http } from "@/utils";
import * as echarts from "echarts";

function Home() {
  const [params, setParams] = useState(null);

  async function submitForm(values) {
    values = { ...values, pageSize: 999, current: 1 };
    setParams(values);
  }

  const domRef = useRef();
  const [option, setOption] = useState(null);

  useEffect(() => {
    const loadDataset = async () => {
      const res = await http.get("/amazon/analyze-data/list", { params });
      if (res.data.records) {
        const option = {
          dataset: {
            dimensions: ["dataDate", "orderedProductSales"],
            source: res.data.records,
          },
          tooltip: {
            trigger: "axis",
            formatter: function (params, ticket, callback) {
              return (
                params[0].name +
                "<br/> 总销售额:" +
                params[0].value.orderedProductSales
              );
            },
          },
          xAxis: {
            type: "category",
            name: "日期",
            nameTextStyle: {
              fontStyle: "italic",
            },
            axisLabel: {
              interval: 0,
              rotate: -70,
            },
          },
          yAxis: { name: "金额" },
          series: [{ type: "line", smooth: true, areaStyle: {} }],
        };
        setOption(option);
      }
    };

    if (params) {
      console.log("Loaded");
      loadDataset();
    }
  }, [params]);

  useEffect(() => {
    const chartInit = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(domRef.current);
      // 绘制图表
      myChart.setOption(option);
      return myChart;
    };
    let chart;
    if (option) {
      chart = chartInit();
    }
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [option]);

  return (
    <div style={{ height: "100%" }}>
      <ProCard
        title="数据分析"
        extra={
          <Space>
            <ProForm
              layout={"horizontal"}
              onFinish={submitForm}
              style={{ height: "100%" }}
            >
              <Space>
                <ProFormDateRangePicker
                  width={260}
                  transform={(values) => {
                    return {
                      startDate: values ? values[0] : undefined,
                      endDate: values ? values[1] : undefined,
                    };
                  }}
                  name={"dateRange"}
                  locale={locale}
                  rules={[{ required: true }]}
                />
                <ProFormText
                  name={"asin"}
                  width={150}
                  rules={[{ required: true }]}
                  className={"text-form"}
                />
              </Space>
            </ProForm>
          </Space>
        }
      >
        {option ? (
          <div>
            <div ref={domRef} style={{ width: "100%", height: 300 }}></div>
          </div>
        ) : (
          <Empty />
        )}
      </ProCard>
    </div>
  );
}
export default Home;
