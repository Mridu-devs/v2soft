import React from "react";
import "./newslist.scss";
import NewsCard from "../NewsCard";

const NewsList = ({ articles }) => (
  <div className="newslist">
    {articles.map((article, index) => (
     <NewsCard key={index} article={article}/>
    ))}
  </div>
);

export default NewsList;
