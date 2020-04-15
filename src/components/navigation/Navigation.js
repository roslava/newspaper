import React from 'react';
import {Link} from "react-router-dom";

export default class Navigation extends React.Component {
render(){
  return(
    <div>
    <Link to="/">Читайте в номере</Link>
    <Link to="/archive">Другие номера газеты</Link>
    <Link to="/feedback">Обратная связь</Link>
    </div>
  )
}
}
