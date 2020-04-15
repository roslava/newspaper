import React from 'react';
import { Link } from "react-router-dom";

function ArticlesPage(props){
  const articles = props.articles;
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <div>{article.rubric}</div>
          <div>{article.title}</div>
          <div>{article.lead()}</div>
          <Link to={`/article/${index + 1}`}>Читать полность</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default ArticlesPage
