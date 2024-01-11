import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../newslist/NewsList";
import "./newsportal.scss";
import NewsCard from "../NewsCard";
import CircularProgress from "@mui/material/CircularProgress";

const NewsPortal = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiKey = "0b908a63d9fb4a73b15726ed21fba37a";
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

      const response = await axios.get(apiUrl);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error.message);
      setError("An error occurred while fetching the news.");
    }
  };

  return (
    <div className="newsportal">
      <h1>News Portal</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : news.length === 0 ? (
        <CircularProgress size="10rem"/>
      ) : (
        <NewsList articles={news} />
      )
      // <NewsCard articles={news}/>
      }
    </div>
  );
};

export default NewsPortal;
