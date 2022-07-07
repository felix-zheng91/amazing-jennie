import { Button, Empty, Space } from "antd";
import "./index.scss";
import {
  ProCard,
  ProForm,
  ProFormDateRangePicker,
  ProFormText,
  ProFormSelect,
} from "@ant-design/pro-components";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { useEffect, useRef, useState } from "react";
import { http } from "@/utils";
import * as echarts from "echarts";
import { SearchOutlined } from "@ant-design/icons";

function Home() {
  const [params, setParams] = useState(null);

  const [sku, setSku] = useState("");

  async function submitForm(values) {
    values = { ...values, pageSize: 999, current: 1 };
    setParams(values);
  }

  const domRefDetail = useRef();
  const domRefAd = useRef();
  const [optionDetail, setOptionDetail] = useState(null);
  const [optionAd, setOptionAd] = useState(null);

  useEffect(() => {
    const loadDataset = async () => {
      const res = await http.get("/amazon/analyze-data/list", { params });
      if (res.data.records.length > 0) {
        setSku(res.data.records[0].sku);
        const option = {
          title: {
            text: "详情数据",
            top: "bottom",
            left: "auto",
            z: -999,
          },
          dataset: {
            dimensions: [
              "dataDate",
              { name: "orderedProductSales", displayName: "总销售额" },
              { name: "orderedProductCount", displayName: "总订单" },
              { name: "natureOrder", displayName: "自然订单" },
              { name: "viewCountMobile", displayName: "浏览量-移动应用" },
              { name: "viewCountWeb", displayName: "浏览量-浏览器" },
              { name: "viewCountAll", displayName: "浏览量" },
              { name: "sessionCountMobile", displayName: "点击-移动应用" },
              { name: "sessionCountWeb", displayName: "点击-浏览器" },
              { name: "sessionCountAll", displayName: "点击" },
              {
                name: "sessionPercentageMobile",
                displayName: "点击率-移动应用",
              },
              { name: "sessionPercentageWeb", displayName: "点击率-浏览器" },
              { name: "sessionPercentageAll", displayName: "点击率" },
              { name: "cr", displayName: "业务报告转化率" },
            ],
            source: res.data.records,
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            type: "scroll",
            show: true,
            selector: [
              {
                type: "all or inverse",
                // 可以是任意你喜欢的 title
                title: "全选",
              },
              {
                type: "inverse",
                title: "反选",
              },
            ],
          },
          xAxis: {
            type: "category",
            nameTextStyle: {
              fontStyle: "italic",
            },
            axisLabel: {
              interval: 0,
              rotate: -70,
            },
          },
          yAxis: [
            { name: "数额" },
            {
              name: "百分比",
              axisLabel: {
                formatter: "{value} %",
              },
            },
          ],
          series: [
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
          ],
        };
        setOptionDetail(option);
      }
    };

    if (params) {
      loadDataset();
    }
  }, [params]);

  useEffect(() => {
    const loadDataset = async () => {
      const res = await http.get("/amazon/analyze-data/list", { params });
      if (res.data.records.length > 0) {
        setSku(res.data.records[0].sku);
        const option = {
          title: {
            text: "广告数据",
            top: "bottom",
            left: "auto",
          },
          dataset: {
            dimensions: [
              "dataDate",
              { name: "displayVol", displayName: "广告曝光" },
              { name: "clickVol", displayName: "广告点击" },
              { name: "adCtr", displayName: "广告点击率" },
              { name: "adOrderCount", displayName: "广告订单量" },
              { name: "clickPricePer", displayName: "平均单次点击价格" },
              { name: "customCostPer", displayName: "获客成本" },
              { name: "adCr", displayName: "广告转化率" },
              { name: "adCost", displayName: "广告花费" },
              { name: "adSalesAmount", displayName: "广告销售额" },
              { name: "adAcos", displayName: "广告ACOS" },
              { name: "adOrderPercentage", displayName: "广告订单占比" },
              { name: "adCostRate", displayName: "广告费率" },
              {
                name: "adSalesAmountPercentage",
                displayName: "广告销售额占比",
              },
              { name: "adSalesAmountCr", displayName: "广告销售额贡献率" },
            ],
            source: res.data.records,
          },
          tooltip: {
            trigger: "axis",
            // formatter: function (params, ticket, callback) {
            //   return (
            //     params[0].name +
            //     "<br/> 总销售额:" +
            //     params[0].value.orderedProductSales
            //   );
            // },
          },
          legend: {
            type: "scroll",
            show: true,
            selector: [
              {
                type: "all or inverse",
                // 可以是任意你喜欢的 title
                title: "全选",
              },
              {
                type: "inverse",
                title: "反选",
              },
            ],
          },
          xAxis: {
            type: "category",
            nameTextStyle: {
              fontStyle: "italic",
            },
            axisLabel: {
              interval: 0,
              rotate: -70,
            },
          },
          yAxis: [
            { name: "数额" },
            {
              name: "百分比",
              axisLabel: {
                formatter: "{value} %",
              },
            },
          ],
          series: [
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                // formatter: "";
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
              },
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
            {
              type: "line",
              smooth: true,
              areaStyle: {},
              label: {
                show: true,
                formatter: function (params) {
                  return (
                    params.data[
                      params.dimensionNames[params.seriesIndex + 1]
                    ].toFixed(2) + "%"
                  );
                },
              },
              yAxisIndex: 1,
            },
          ],
        };
        setOptionAd(option);
      }
    };

    if (params) {
      loadDataset();
    }
  }, [params]);

  useEffect(() => {
    const chartInit = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(domRefDetail.current);
      // 绘制图表
      myChart.setOption(optionDetail);
      return myChart;
    };
    let chart;
    if (optionDetail) {
      chart = chartInit();
    }
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [optionDetail]);

  useEffect(() => {
    const chartInit = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(domRefAd.current);
      // 绘制图表
      myChart.setOption(optionAd);
      return myChart;
    };
    let chart;
    if (optionAd) {
      chart = chartInit();
    }
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [optionAd]);

  return (
    <div style={{ height: "100%" }}>
      <ProCard
        title={`SKU:${sku}`}
        extra={
          <Space>
            <ProForm
              layout={"horizontal"}
              onFinish={submitForm}
              style={{ height: "100%" }}
              submitter={{
                searchConfig: {
                  submitText: "查询",
                },
                resetButtonProps: {
                  style: {
                    display: "none",
                  },
                },
                // 完全自定义整个区域
                render: (props, doms) => {
                  return [
                    <Button
                      shape="circle"
                      type="primary"
                      key="submit"
                      onClick={() => props.form?.submit?.()}
                      style={{ marginLeft: "16px" }}
                      icon={<SearchOutlined />}
                    />,
                  ];
                },
              }}
            >
              <Space align={"baseline"}>
                <ProFormDateRangePicker
                  width={260}
                  transform={(values) => {
                    return {
                      startDate: values ? values[0] : undefined,
                      endDate: values ? values[1] : undefined,
                    };
                  }}
                  label={"时间"}
                  name={"dateRange"}
                  locale={locale}
                  rules={[{ required: true }]}
                />
                <ProFormText
                  label={"ASIN"}
                  name={"asin"}
                  width={150}
                  rules={[{ required: true }]}
                  className={"text-form"}
                />
                <ProFormSelect
                  name="account"
                  label="账号"
                  request={async () => [
                    { value: "TSD-UK", label: "TSD-UK" },
                    { value: "KS-UK", label: "KS-UK" },
                    { value: "JLA-UK", label: "JLA-UK" },
                    { value: "PC-UK", label: "PC-UK" },
                    { value: "JLA-ES", label: "JLA-ES" },
                    { value: "JIN-UK", label: "JIN-UK" },
                  ]}
                  placeholder="选择账号"
                  rules={[{ required: true, message: "选择账号" }]}
                />
              </Space>
            </ProForm>
          </Space>
        }
        style={{ height: "100%", overflowY: "auto" }}
      >
        {optionDetail || optionAd ? (
          <div>
            <div
              ref={domRefDetail}
              style={{ width: "100%", height: 350, marginBottom: 30 }}
            ></div>
            <div ref={domRefAd} style={{ width: "100%", height: 350 }}></div>
          </div>
        ) : (
          <Empty />
        )}
      </ProCard>
    </div>
  );
}
export default Home;
