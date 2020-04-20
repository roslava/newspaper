import '../styles/articles-page.scss';
import React from 'react';
import { Link } from "react-router-dom";

function ArticlesPage(props){
  const articles = props.articles;
  return (
    <div  className="articlePage articlesPage__gallery"  >
      {articles.map((article, index) => (
        <div className="articlesPage__col-block" key={index}>
          <div className="articlesPage__rubric">{article.rubric}</div>
          <div className="articlesPage__title">{article.title}</div>
          <div className="articlesPage__lead">{article.lead()}</div>
          <Link className="articlesPage__link" to={`/article/${index + 1}`}>Читать полность</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default ArticlesPage
