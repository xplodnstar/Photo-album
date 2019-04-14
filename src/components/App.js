import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/base.css'
import AlbumList from './AlbumList'
import Album from './Album'
import AlbumImages from './AlbumImages'
import Image from './Image'

const App = props => (
  <Router>
    <div id="page">
      <Route exact path="/" component={AlbumList} />
      <Route exact path="/album/:id" component={Album} />
      <Route path="/album/:id" component={AlbumImages} />
      <Route exact path="/image/:id" component={Image} />
    </div>
  </Router >
)

export default App;
