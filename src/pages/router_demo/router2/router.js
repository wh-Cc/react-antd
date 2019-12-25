import React from 'react';
import {HashRouter , Route } from 'react-router-dom'
import Main from './../router1/Main';
import About from './../router1/About';
import Topic from './../router1/Topic';
import Home from './Home';

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Home>
                    <Route exact path='/' component={Main}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topics' component={Topic}></Route>
                </Home>
            </HashRouter>
        )
    }
}