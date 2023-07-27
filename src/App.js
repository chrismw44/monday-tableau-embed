import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import TableauEmbed from './Components/TableauEmbed';

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return <div className="App">
      <TableauEmbed />
    </div>;
  }
}

export default App;
