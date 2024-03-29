import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../newslist/NewsList";
import "./newsportal.scss";
import CircularProgress from "@mui/material/CircularProgress";
import SearchAppBar from "../searchAppBar/SearchAppBar";

const NewsPortal = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [headline, setHeadline] = useState("India's today's Top Headlines");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (search) => {
    try {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

      if (search) {
        apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-01-10&sortBy=popularity&apiKey=${apiKey}`;
      }
      const response = await axios.get(apiUrl);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error.message);
      setError("An error occurred while fetching the news.");
    } finally {
      setLoading(false);
    }
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery) {
      return alert("Please enter a value");
    }
    setLoading(true);
    setHeadline(searchQuery);
    let search = true;
    // Trigger a new search when the form is submitted
    fetchNews(search);
  };
  return (
    <div className="newsportal">
      <div style={{ width: "100%" }}>
        <SearchAppBar
          value={searchQuery}
          setValue={setSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          fetchNews={fetchNews}
          setLoading={setLoading}
          setHeadline={setHeadline}
        />
      </div>
      <h1>{headline}</h1>
      {loading ? (
        <CircularProgress size="10rem" />
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <NewsList articles={news} />
      )}
    </div>
  );
};

export default NewsPortal;
