// 自定义webpack配置文件
const path = require("path");
const { whenProd, getPlugin, pluginByName } = require("@craco/craco");

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      // 使用 @ 表示 src 目录
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: [],
      };

      whenProd(() => {
        webpackConfig.externals = {
          react: "React",
          "react-dom": "ReactDOM",
          echarts: "echarts",
        };
        cdn = {
          js: [
            "https://unpkg.com/react@18/umd/react.production.min.js",
            "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
            "https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js",
          ],
          css: [],
        };
      });

      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName("HtmlWebpackPlugin")
      );
      if (isFound) {
        match.userOptions.cdn = cdn;
      }
      return webpackConfig;
    },
  },
};
