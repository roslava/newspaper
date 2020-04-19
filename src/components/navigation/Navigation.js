import React from 'react';
import {Link} from "react-router-dom";

export default class Navigation extends React.Component {
render(){
  return(
    <div>


    <Link to="/">Читайте в номере</Link>
    <a target="_self" href="https://roslava.github.io/index/">Все номера</a>
    <Link to="/feedback">Обратная связь</Link>
    </div>
  )
}
}
