import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

function Bar(optionParams) {
  console.log(optionParams);

  const [option, setOption] = useState({});

  setOption(optionParams);
  const domRef = useRef();

  useEffect(() => {
    const chartInit = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(domRef.current);
      // 绘制图表
      myChart.setOption(option);
      return myChart;
    };

    const chart = chartInit();
    return () => {
      chart.dispose();
    };
  }, [option]);

  return (
    <div>
      <div ref={domRef} style={{ width: 300, height: 300 }}></div>
    </div>
  );
}

export default Bar;
