// import React, { useState } from "react";
// import Layout from "../components/Layouts/Layout";
// import { Link } from "react-router-dom";

import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: {},
      selectOptions: []
    };
  }

  async getOptions() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    console.log(e);
    this.setState({ selectedValue: e });
  }

  componentDidMount() {
    this.getOptions();
  }

  buttonClick = () => {
    const valueToSet = this.state.selectOptions.find((row) => {
      return row.value === 2 && row.label === "Ervin Howell";
    });

    if (valueToSet) {
      this.handleChange(valueToSet);
    }
  };

  render() {
    const { selectedValue = {} } = this.state;
    console.log(this.state.selectOptions);
    return (
      <div>
        <Select
      value={{ id: this.state.id, label: this.state.name }}
      options={this.state.selectOptions}
      onChange={this.handleChange.bind(this)}
    />
        <p>
          You have selected <strong>{selectedValue.label}</strong> whose id is{" "}
          <strong>{selectedValue.value}</strong>
        </p>
        <button onClick={this.buttonClick}>Click</button>
      </div>
      
    );
  }
}
