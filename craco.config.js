// 自定义webpack配置文件

const path = require("path");

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      // 使用 @ 表示 src 目录
      "@": path.resolve(__dirname, "src"),
    },
  },
};
