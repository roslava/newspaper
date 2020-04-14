import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


const articles = [
  {
    rubric: `Рубрика`,
    title: `Заголовок_1`,
    undertitle: `Подзаголовок_1`,
    lead: `Текст лида`,
    text: `Сам текст`,
    author: `Иванов`,
    cover: `img`,
  },
  {
    rubric: `Рубрика`,
    title: `Заголовок_2`,
    undertitle: `Подзаголовок_2`,
    lead: `Текст лида`,
    text: `Сам текст`,
    author: `Петров`,
    cover: `img`,
  }
];

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

const articlesPage = () => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <div>{article.rubric}</div>
          <div>{article.title}</div>
          <div>{article.lead}</div>
          <Link to={`/article/${index + 1}`}>Читать полность</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};


const ArticlePage = ({ match, location }) => {
  const {
    params: { articleId }
  } = match;

  return (
    <div>
      <p>
        <div>{articles[articleId - 1].rubric}</div>
        <div>{articles[articleId - 1].title}</div>
        <div>{articles[articleId - 1].lead}</div>
        <div>{articles[articleId - 1].text}</div>
        <div>{articles[articleId - 1].author}</div>
      </p>
    </div>
  );
};



class App extends React.Component {

  render(){
    return(
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">articles</Link>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/articles" component={articlesPage} />
          <Route exact path="/article/:articleId" component={ArticlePage} />
          <Route exact path="/about" component={AboutPage} />
        </Router>
        {/*<a href="/articles"> Читать другие матералы номера газеты</a>*/}
      </div>
    );
  }
}

export default App
