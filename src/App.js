import React from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation'
import FeedbackPage from './pages/FeedbackPage'
import ArticlesPage from './pages/ArticlesPage'
import ArchivePage from './pages/ArchivePage'

/*Подключение массива с базой статей из файла ArticlesIndex.js */
import ArticlesIndex from './articles/Articles_index';

/*Помещаем массив с базой статей в константу articles */
const articles = ArticlesIndex;


class App extends React.Component {

  render(){
    return(
      <div>
        <Router>
          <Navigation />
          <Route exact path="/archive" component={ArchivePage} />
          <Route exact path="/" render = {()=> <ArticlesPage articles = {articles}/>} />
          <Route exact path="/article/:articleId" component={ArticlePage} />
          <Route exact path="/feedback" component={FeedbackPage} />
        </Router>
      </div>
    );
  }
}
export default App



/*Не выходит вынести в отдельный компонент!!!*/
function ArticlePage({match}) {
  const {params: { articleId }} = match;
  return (
    <div>
        <div>{articles[articleId - 1].rubric}</div>
        <div>{articles[articleId - 1].title}</div>
        <div>{articles[articleId - 1].lead()}</div>
        <div>{articles[articleId - 1].text()}</div>
        <div>{articles[articleId - 1].author}</div>
    </div>
  );
};
