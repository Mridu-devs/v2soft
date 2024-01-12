import React from "react";
import "./searchappbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

export default function SearchAppBar({
  value,
  setValue,
  handleSearchSubmit,
  fetchNews,
  setLoading,
  setHeadline,
}) {
  const onNewsClick = () => {
    setValue("");
    setHeadline("India's today's Top Headlines");
    setLoading(true);
    fetchNews();
  };

  return (
    <div className="searchappbar">
      <div className="left">
        <div className="menuicon">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        {/* <MenuIcon className="menuicon" /> */}
        <h1 onClick={onNewsClick}>NEWS</h1>
      </div>
      <div className="right">
        <SearchIcon
          className="searchicon"
          onClick={(e) => handleSearchSubmit(e)}
        />
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
