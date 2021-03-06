import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import Landing from './Landing';
import Dashboard from './Dashboard';

const SurveyNew = () => {
    return (
        <h2>SurveyNew</h2>
    )
};

class App extends Component {
    // Basically onShow() in backbone
    componentDidMount() {
        this.props.fetchUser();
    }

    // Render method in backbone
    render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header />
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/surveys" component={Dashboard}/>
                      <Route path="/surveys/new" component={SurveyNew}/>
                  </div>
              </BrowserRouter>
          </div>
        )
    }
}

export default connect(null, actions)(App);