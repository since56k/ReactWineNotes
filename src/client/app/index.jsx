import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'


import Main from 'Main'
import Wine from 'Wine'
import About from 'About'
import Examples from 'Examples'
import WineFields from 'WineFields'
import AppCrud from 'AppCrud'




//Load foundation css! loader inject
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//Main component
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>//if / then IndexRout else about 
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
    <Route path="appcrud" component={AppCrud}/>
    <Route path="winefields(/:id)" component={WineFields} />
    <IndexRoute component={Wine}/>
  </Route>
</Router>,
  document.getElementById('app')
);



//state can be change, props cant

//container components have states
//presentation component don't

//container components maintain stats black
//form and message are presentation components
//nested components