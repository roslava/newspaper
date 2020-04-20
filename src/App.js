import React from "react";
import './styles/app.scss';
import {BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import FeedbackPage from './pages/FeedbackPage'
import ArticlesPage from './pages/ArticlesPage'


/*Подключение массива с базой статей из файла ArticlesIndex.js */
import ArticlesIndex from './articles/Articles_index';

/*Помещаем массив с базой статей в константу articles */
const articles = ArticlesIndex;


class App extends React.Component {

  render(){
    return(
        <Router>

            <header>
            </header>
            <nav>
              <Navigation />
            </nav>
            <main  className="app__main">
              <div className="container">
                <div className="row app__gallery">

              <Route exact path="/" render = {()=> <ArticlesPage articles = {articles}/>} />
              <Route exact path="/article/:articleId" component={ArticlePage} />
              <Route exact path="/feedback" component={FeedbackPage} />

              </div>
              </div>
            </main>
            <Footer />
      
      </Router>
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
