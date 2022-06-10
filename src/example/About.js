import React from "react";
import { useParams } from "react-router-dom";

function About() {
  let params = useParams(); // 用于路径变量
  return <div>About {params.id}</div>;

  // const [params] = useSearchParams(); // 用于queryParams 传参方式
  // return <div>About {params.get("id")}</div>;
}

export default About;
