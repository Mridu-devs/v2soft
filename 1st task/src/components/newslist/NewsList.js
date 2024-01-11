// import React from "react";
// import "./newslist.scss";

// const NewsList = ({ articles }) => (
//   <ul className="newslist">
//     {articles.map((article, index) => (
//       <div>
//         <a
//           key={index}
//           href={article.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={article.urlToImage} alt={article.title} />
//           <h1>{article.title}</h1>
//           <p>{article.description}</p>
//         </a>
//       </div>
//     ))}
//   </ul>
// );

// export default NewsList;

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
