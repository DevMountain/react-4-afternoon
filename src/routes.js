/**
 * Created by Porter on 1/10/2018.
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student';

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/classlist/:class" component={ClassList}></Route>
        <Route path="/student/:id" component={Student}></Route>
    </Switch>
)