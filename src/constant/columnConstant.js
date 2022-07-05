const columnConstant = {
  detailDataColumns: [
    { title: "日期", dataIndex: "dataDate", width: 100 },
    { title: "（父）ASIN", dataIndex: "parentAsin", width: 120 },
    { title: "（子）ASIN", dataIndex: "sonAsin", width: 120 },
    { title: "商品名称", dataIndex: "productName", ellipsis: true, width: 80 },
    {
      title: "会话次数 – 移动应用",
      dataIndex: "sessionCountMobile",
      width: 60,
    },
    { title: "会话次数 – 浏览器", dataIndex: "sessionCountWeb", width: 60 },
    { title: "会话次数 – 总计", dataIndex: "sessionCountAll", width: 60 },
    {
      title: "会话百分比 – 移动应用",
      dataIndex: "sessionPercentageMobile",
      render: (text, record, index) => {
        return record.sessionPercentageMobile
          ? (record.sessionPercentageMobile * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "会话百分比 – 浏览器",
      dataIndex: "sessionPercentageWeb",
      render: (text, record, index) => {
        return record.sessionPercentageWeb
          ? (record.sessionPercentageWeb * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "会话百分比 – 总计",
      dataIndex: "sessionPercentageAll",
      render: (text, record, index) => {
        return record.sessionPercentageAll
          ? (record.sessionPercentageAll * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    { title: "页面浏览量 – 移动应用", dataIndex: "viewCountMobile", width: 60 },
    { title: "页面浏览量 – 浏览器", dataIndex: "viewCountWeb", width: 60 },
    { title: "页面浏览量 – 总计", dataIndex: "viewCountAll", width: 60 },
    {
      title: "页面浏览量百分比 – 移动应用",
      dataIndex: "viewCountPercentageMobile",
      render: (text, record, index) => {
        return record.viewCountPercentageMobile
          ? (record.viewCountPercentageMobile * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "页面浏览量百分比 – 浏览器",
      dataIndex: "viewCountPercentageWeb",
      render: (text, record, index) => {
        return record.viewCountPercentageWeb
          ? (record.viewCountPercentageWeb * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "页面浏览量百分比 – 总计",
      dataIndex: "viewCountPercentageAll",
      render: (text, record, index) => {
        return record.viewCountPercentageAll
          ? (record.viewCountPercentageAll * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "推荐报价（购买按钮）百分比",
      dataIndex: "buyButtonPercentage",
      render: (text, record, index) => {
        return record.buyButtonPercentage
          ? (record.buyButtonPercentage * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    { title: "已订购商品数量", dataIndex: "orderedProductCount", width: 60 },
    {
      title: "已订购商品数量 - B2B",
      dataIndex: "orderedProductCountB2b",
      width: 60,
    },
    {
      title: "商品会话百分比",
      dataIndex: "productSessionPercentage",
      render: (text, record, index) => {
        return record.productSessionPercentage
          ? (record.productSessionPercentage * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "商品会话百分比 - B2B",
      dataIndex: "productSessionPercentageB2b",
      render: (text, record, index) => {
        return record.productSessionPercentageB2b
          ? (record.productSessionPercentageB2b * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    { title: "已订购商品销售额", dataIndex: "orderedProductSales", width: 60 },
    {
      title: "已订购商品销售额 - B2B",
      dataIndex: "orderedProductSalesB2b",
      width: 60,
    },
    { title: "订单商品总数", dataIndex: "orderProductCount", width: 60 },
    {
      title: "订单商品总数 - B2B",
      dataIndex: "orderProductCountB2b",
      width: 60,
    },
  ],
  analyzeDataColumns: [
    { title: "日期", dataIndex: "dataDate", width: 100 },
    { title: "总销售额", dataIndex: "orderedProductSales", width: 80 },
    { title: "总订单", dataIndex: "orderedProductCount", width: 60 },
    { title: "自然订单", dataIndex: "natureOrder", width: 60 },
    { title: "浏览量-移动应用", dataIndex: "viewCountMobile", width: 60 },
    { title: "浏览量-浏览器", dataIndex: "viewCountWeb", width: 60 },
    { title: "浏览量", dataIndex: "viewCountAll", width: 60 },
    { title: "点击-移动应用", dataIndex: "sessionCountMobile", width: 60 },
    { title: "点击-浏览器", dataIndex: "sessionCountWeb", width: 60 },
    { title: "点击", dataIndex: "sessionCountAll", width: 60 },
    {
      title: "点击率-移动应用",
      dataIndex: "sessionPercentageMobile",
      render: (text, record, index) => {
        return record.sessionPercentageMobile
          ? record.sessionPercentageMobile.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "点击率-浏览器",
      dataIndex: "sessionPercentageWeb",
      render: (text, record, index) => {
        return record.sessionPercentageWeb
          ? record.sessionPercentageWeb.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "点击率",
      dataIndex: "sessionPercentageAll",
      render: (text, record, index) => {
        return record.sessionPercentageAll
          ? record.sessionPercentageAll.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "业务报告转化率",
      dataIndex: "cr",
      render: (text, record, index) => {
        return record.cr ? record.cr.toFixed(2) + "%" : text;
      },
      width: 80,
    },
    { title: "广告曝光", dataIndex: "displayVol", width: 60 },
    { title: "广告点击", dataIndex: "clickVol", width: 60 },
    {
      title: "广告点击率",
      dataIndex: "adCtr",
      render: (text, record, index) => {
        return record.adCtr ? record.adCtr.toFixed(2) + "%" : text;
      },
      width: 80,
    },
    { title: "广告订单量", dataIndex: "adOrderCount", width: 60 },
    { title: "平均单次点击价格", dataIndex: "clickPricePer", width: 90 },
    { title: "获客成本", dataIndex: "customCostPer", width: 60 },
    {
      title: "广告转化率",
      dataIndex: "adCr",
      render: (text, record, index) => {
        return record.adCr ? record.adCr.toFixed(2) + "%" : text;
      },
      width: 80,
    },
    { title: "广告花费", dataIndex: "adCost", width: 60 },
    { title: "广告销售额", dataIndex: "adSalesAmount", width: 60 },
    {
      title: "广告ACOS",
      dataIndex: "adAcos",
      render: (text, record, index) => {
        return record.adAcos ? record.adAcos.toFixed(2) + "%" : text;
      },
      width: 80,
    },
    {
      title: "广告订单占比",
      dataIndex: "adOrderPercentage",
      render: (text, record, index) => {
        return record.adOrderPercentage
          ? record.adOrderPercentage.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "广告费率",
      dataIndex: "adCostRate",
      render: (text, record, index) => {
        return record.adCostRate ? record.adCostRate.toFixed(2) + "%" : text;
      },
      width: 80,
    },
    {
      title: "广告销售额占比",
      dataIndex: "adSalesAmountPercentage",
      render: (text, record, index) => {
        return record.adSalesAmountPercentage
          ? record.adSalesAmountPercentage.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    {
      title: "广告销售额贡献率",
      dataIndex: "adSalesAmountCr",
      render: (text, record, index) => {
        return record.adSalesAmountCr
          ? record.adSalesAmountCr.toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
  ],
  adDataColumns: [
    { title: "开始日期", dataIndex: "dataDate", width: 100 },
    // {
    //   title: "广告组合名称",
    //   dataIndex: "adCollectionName",
    //   ellipsis: true,
    //   width: 60,
    // },
    { title: "货币", dataIndex: "ccyCode", width: 50 },
    { title: "广告活动名称", dataIndex: "adName", width: 160 },
    { title: "广告组名称", dataIndex: "adGroupName", width: 120 },
    { title: "广告SKU", dataIndex: "msku", width: 180 },
    { title: "广告ASIN", dataIndex: "asin", width: 120 },
    { title: "展示量", dataIndex: "displayVol", width: 60 },
    { title: "点击量", dataIndex: "clickVol", width: 40 },
    {
      title: "点击率(CTR)",
      dataIndex: "ctr",
      ellipsis: true,
      render: (text, record, index) => {
        return record.ctr ? (record.ctr * 100).toFixed(2) + "%" : text;
      },
      width: 80,
    },
    { title: "每次点击成本(CPC)", dataIndex: "cpc", width: 60 },
    { title: "花费", dataIndex: "cost", width: 60 },
    { title: "7天总销售额", dataIndex: "sevenSalesAmount", width: 60 },
    {
      title: "广告成本销售比(ACOS)",
      dataIndex: "acos",
      ellipsis: true,
      render: (text, record, index) => {
        return record.acos ? (record.acos * 100).toFixed(2) + "%" : text;
      },
      width: 80,
    },
    {
      title: "投入产出比(ROAS)",
      dataIndex: "roas",
      render: (text, record, index) => {
        return record.roas ? (record.roas * 100).toFixed(2) + "%" : text;
      },
      width: 80,
    },
    { title: "7天总订单数(#)", dataIndex: "sevenOrders", width: 60 },
    { title: "7天总销售量(#)", dataIndex: "sevenSales", width: 60 },
    {
      title: "7天的转化率",
      dataIndex: "sevenConversionRate",
      render: (text, record, index) => {
        return record.sevenConversionRate
          ? (record.sevenConversionRate * 100).toFixed(2) + "%"
          : text;
      },
      width: 80,
    },
    { title: "7天内广告SKU销售量(#)", dataIndex: "sevenAdSkuSales", width: 60 },
    {
      title: "7天内其他SKU销售量(#)",
      dataIndex: "sevenOtherSkuSales",
      width: 60,
    },
    {
      title: "7天内广告SKU销售额",
      dataIndex: "sevenAdSkuSalesAmount",
      width: 60,
    },
    {
      title: "7天内其他SKU销售额",
      dataIndex: "sevenOtherSkuSalesAmount",
      width: 60,
    },
  ],
  // SKU&ASIN
  skuAsinColumns: [
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "MSKU",
      dataIndex: "msku",
    },
    {
      title: "ASIN",
      dataIndex: "asin",
    },
    {
      title: "账号",
      dataIndex: "account",
    },
    {
      title: "开售时间",
      dataIndex: "firstSellDate",
    },
    {
      title: "主链接",
      dataIndex: "mainAccount",
    },
  ],
};

export default columnConstant;
