import * as React from "react";
import Layout from "../components/layout";
import logo from "../images/img_9010.png";

const IndexPage = () => {
  return (
    <Layout>
      <img
        src={logo}
        alt="Logo"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
        }}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Pranayama House</title>;
