import Bar from "@/components/Bar";

function Home() {
  return (
    <div>
      <Bar
        title={"主流框架使用满意度"}
        xData={["react", "vue", "angular", "jquery"]}
        yData={[88, 79, 67, 50]}
        style={{ width: "500px", height: "400px" }}
      />
      <Bar
        title={"主流框架使用满意度2"}
        xData={["react", "vue", "angular", "jquery"]}
        yData={[81, 69, 75, 40]}
        style={{ width: "500px", height: "200px" }}
      />
    </div>
  );
}
export default Home;
