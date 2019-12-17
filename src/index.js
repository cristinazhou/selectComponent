import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import { OptionsType } from "./model";
interface IProps {}
const defalutOptions = [
  { index: 0, value: "Strawberry" },
  { index: 1, value: "Chocolate" },
  { index: 2, value: "Vanilla" }
];

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      cotent: "---TodoList---",
      options: defalutOptions
    };
    this.handleChange = this.handleChange.bind(this);
    this.choose = this.choose.bind(this);
  }
  handleChange() {
    this.setState(state => ({
      flag: !state.flag
    }));
    if (this.state.flag === true) {
      document.getElementById("sel-option").style.display = "block";
    } else {
      document.getElementById("sel-option").style.display = "none";
    }
  }
  choose(a) {
    let value = this.state.options.findIndex(obj => obj.index === a);
    this.setState(state => ({
      cotent: state.options[value].value
    }));
    let liDom = document.querySelectorAll("#sel-option > li");
    liDom.forEach(function(value, key) {
      if (key === a) {
        value.style.backgroundColor = "#1645f5";
      } else {
        value.style.backgroundColor = "";
      }
    });
    this.setState(state => ({
      flag: !state.flag
    }));
    document.getElementById("sel-option").style.display = "none";
  }
  render() {
    return (
      <div id="sel-wrap">
        <div id="sel-show" onClick={this.handleChange}>
          {this.state.cotent}
        </div>
        <ul id="sel-option">
          {this.state.options.map(item => {
            return (
              <li onClick={this.choose.bind(this, item.index)}>{item.value}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Select />, document.getElementById("root"));
