const path = require("path");
const nav = require("../config/nav");
const sidebar = require("../config/sidebar");
module.exports = {
  theme: "antdocs",
  title: "ant-press | 基于antdocs的文档系统",
  description: "快速构建文档系统",
  base: "/docs/",
  dest: "./dest",
  port: "8888",
  themeConfig: {
    backToTop: true,
    logo: "/logo.png",
    sidebar: { ...sidebar },
    nav: [...nav],
  },
  plugins: [],
};
