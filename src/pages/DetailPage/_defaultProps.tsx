interface DetailData {
  id: number;
  dataDate: string;
  parentAsin: string;
  productName: string;
  sessionCountMobile: number;
  sessionCountWeb: number;
  sessionCountAll: number;
  sessionPercentageMobile: number;
  sessionPercentageWeb: number;
  sessionPercentageAll: number;
  viewCountMobile: number;
  viewCountWeb: number;
  viewCountAll: number;
  viewCountPercentageMobile: number;
  viewCountPercentageWeb: number;
  viewCountPercentageAll: number;
  buyButtonPercentage: number;
  orderedProductCount: number;
  orderedProductCountB2b: number;
  productSessionPercentage: number;
  productSessionPercentageB2b: number;
  orderedProductSales: number;
  orderedProductSalesB2b: number;
  orderProductCount: number;
  orderProductCountB2b: number;
  account: string;
}

export default {
  columns: [
    { title: "账号", dataIndex: "account", width: 80 },
    {
      title: "日期",
      dataIndex: "dataDate",
      width: 100,
      valueType: "date",
      hideInSearch: true,
    },
    {
      title: "日期",
      dataIndex: "dataDate",
      width: 100,
      valueType: "dateRange",
      search: {
        transform: (value: string[]) => {
          return {
            startDate: value[0],
            endDate: value[1],
          };
        },
      },
      hideInTable: true,
    },
    { title: "（父）ASIN", dataIndex: "parentAsin", width: 120, search: false },
    {
      title: "（子）ASIN",
      dataIndex: "sonAsin",
      width: 120,
      search: {
        transform: (value: string) => {
          console.log(value);
          return { asin: value };
        },
      },
    },
    {
      title: "商品名称",
      dataIndex: "productName",
      ellipsis: true,
      width: 80,
      search: false,
    },
    {
      title: "会话次数 – 移动应用",
      dataIndex: "sessionCountMobile",
      width: 60,
      search: false,
    },
    {
      title: "会话次数 – 浏览器",
      dataIndex: "sessionCountWeb",
      width: 60,
      search: false,
    },
    {
      title: "会话次数 – 总计",
      dataIndex: "sessionCountAll",
      width: 60,
      search: false,
    },
    {
      title: "会话百分比 – 移动应用",
      dataIndex: "sessionPercentageMobile",
      render: (text: string, record: DetailData, index: number) => {
        return record.sessionPercentageMobile
          ? (record.sessionPercentageMobile * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "会话百分比 – 浏览器",
      dataIndex: "sessionPercentageWeb",
      render: (text: string, record: DetailData, index: number) => {
        return record.sessionPercentageWeb
          ? (record.sessionPercentageWeb * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "会话百分比 – 总计",
      dataIndex: "sessionPercentageAll",
      render: (text: string, record: DetailData, index: number) => {
        return record.sessionPercentageAll
          ? (record.sessionPercentageAll * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "页面浏览量 – 移动应用",
      dataIndex: "viewCountMobile",
      width: 60,
      search: false,
    },
    {
      title: "页面浏览量 – 浏览器",
      dataIndex: "viewCountWeb",
      width: 60,
      search: false,
    },
    {
      title: "页面浏览量 – 总计",
      dataIndex: "viewCountAll",
      width: 60,
      search: false,
    },
    {
      title: "页面浏览量百分比 – 移动应用",
      dataIndex: "viewCountPercentageMobile",
      render: (text: string, record: DetailData, index: number) => {
        return record.viewCountPercentageMobile
          ? (record.viewCountPercentageMobile * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "页面浏览量百分比 – 浏览器",
      dataIndex: "viewCountPercentageWeb",
      render: (text: string, record: DetailData, index: number) => {
        return record.viewCountPercentageWeb
          ? (record.viewCountPercentageWeb * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "页面浏览量百分比 – 总计",
      dataIndex: "viewCountPercentageAll",
      render: (text: string, record: DetailData, index: number) => {
        return record.viewCountPercentageAll
          ? (record.viewCountPercentageAll * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "推荐报价（购买按钮）百分比",
      dataIndex: "buyButtonPercentage",
      render: (text: string, record: DetailData, index: number) => {
        return record.buyButtonPercentage
          ? (record.buyButtonPercentage * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "已订购商品数量",
      dataIndex: "orderedProductCount",
      width: 60,
      search: false,
    },
    {
      title: "已订购商品数量 - B2B",
      dataIndex: "orderedProductCountB2b",
      width: 60,
      search: false,
    },
    {
      title: "商品会话百分比",
      dataIndex: "productSessionPercentage",
      render: (text: string, record: DetailData, index: number) => {
        return record.productSessionPercentage
          ? (record.productSessionPercentage * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "商品会话百分比 - B2B",
      dataIndex: "productSessionPercentageB2b",
      render: (text: string, record: DetailData, index: number) => {
        return record.productSessionPercentageB2b
          ? (record.productSessionPercentageB2b * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
      search: false,
    },
    {
      title: "已订购商品销售额",
      dataIndex: "orderedProductSales",
      width: 60,
      search: false,
    },
    {
      title: "已订购商品销售额 - B2B",
      dataIndex: "orderedProductSalesB2b",
      width: 60,
      search: false,
    },
    {
      title: "订单商品总数",
      dataIndex: "orderProductCount",
      width: 60,
      search: false,
    },
    {
      title: "订单商品总数 - B2B",
      dataIndex: "orderProductCountB2b",
      width: 60,
      search: false,
    },
  ],
};
