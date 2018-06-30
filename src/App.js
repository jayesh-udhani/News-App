import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "antd";
import axios from "axios";
class App extends Component {
  state = { news: [] };
  componentDidMount() {
    let url = "http://starlord.hackerearth.com/hackernews";
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({ news: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.news}
          renderItem={item => <List.Item>{item.title}</List.Item>}
        />
      </div>
    );
  }
}

export default App;
