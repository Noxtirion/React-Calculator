import React from "react";
import Calc from "../src/components/Calc";
import Buttons from "../src/components/Buttons";
import "./style.css";

class MyApp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         num1: "",
         sign: "",
         num2: ""
      };
   }

   componentDidUpdate() {
      console.log(this.state.num1[0]);
      const count1 = this.state.num1;
      const count2 = this.state.num2;

      if (
         count1[0] === "0" &&
         count1[1] !== undefined &&
         count1[1] !== "." &&
         !count1.startsWith("0.", 2)
      ) {
         this.setState({
            num1: count1[1]
         });
      } else if (
         count2[0] === "0" &&
         count2[1] !== undefined &&
         count2[1] !== "." &&
         !count2.startsWith("0.", 2)
      ) {
         this.setState({
            num2: count2[1]
         });
      }
   }

   handleClick = e => {
      let num = e.target.name;
      let numType = Number(num);
      console.log(typeof this.state.num1);

      if (Number.isInteger(numType) && this.state.sign === "" && this.state.num1.length <= 22) {
         this.setState(prevState => {
            return {
               num1: prevState.num1.concat(num)
            };
         });
      } else if (!Number.isInteger(numType) && this.state.num1 !== "") {
         this.setState({
            sign: num
         });
      } else if (
         Number.isInteger(numType) &&
         this.state.sign !== "" &&
         this.state.num2.length <= 22
      ) {
         this.setState(prevState => {
            return {
               num2: prevState.num2.concat(num)
            };
         });
      }
   };

   comma = e => {
      let dot = e.target.name;
      if (
         (this.state.num1 === "" && this.state.num2 === "") ||
         (this.state.num1 !== "" && this.state.num2 === "" && this.state.sign !== "")
      ) {
         dot = 0 + e.target.name;
      }
      console.log(dot);
      if (
         (dot === "." || dot === "0.") &&
         !this.state.num1.includes(".") &&
         this.state.sign.length === 0
      ) {
         this.setState(prevState => {
            return {
               num1: prevState.num1.concat(dot)
            };
         });
      } else if (
         (dot === "." || dot === "0.") &&
         !this.state.num2.includes(".") &&
         this.state.sign.length !== 0
      ) {
         this.setState(prevState => {
            return {
               num2: prevState.num2.concat(dot)
            };
         });
      }
   };

   result = () => {
      let multiply = (Number(this.state.num1) * Number(this.state.num2)).toString();
      let divide = (Number(this.state.num1) / Number(this.state.num2)).toString();
      let sum = (Number(this.state.num1) + Number(this.state.num2)).toString();
      let subtract = (Number(this.state.num1) - Number(this.state.num2)).toString();

      console.log(this.state.sign.length);

      if (this.state.sign === "*") {
         this.setState({
            num1: multiply,
            num2: ""
         });
      } else if (this.state.sign === "/") {
         this.setState({
            num1: divide,
            num2: ""
         });
      } else if (this.state.sign === "+") {
         this.setState({
            num1: sum,
            num2: ""
         });
      } else if (this.state.sign === "-") {
         this.setState({
            num1: subtract,
            num2: ""
         });
      }
   };

   reset = () => {
      this.setState({
         num1: "",
         sign: "",
         num2: ""
      });
   };

   deleteNum = () => {
      console.log(this.state.num1);
      if (this.state.num1 !== "" && this.state.sign === "") {
         this.setState(prevState => {
            return {
               num1: prevState.num1.slice(0, prevState.num1.length - 1)
            };
         });
      } else if (this.state.sign !== "") {
         this.setState(prevState => {
            return {
               num2: prevState.num2.slice(0, prevState.num2.length - 1)
            };
         });
      }
   };

   reverseSign = () => {
      if (this.state.num1 !== "" && this.state.sign === "") {
         this.setState(prevState => {
            return {
               num1: (parseFloat(prevState.num1) * -1).toString()
            };
         });
      } else if (this.state.sign !== "" && this.state.num2 !== "") {
         this.setState(prevState => {
            return {
               num2: (parseFloat(prevState.num2) * -1).toString()
            };
         });
      }
   };

   render() {
      console.log(this.state.num1);
      return (
         <div className="calculator">
            <Calc num1={this.state.num1} num2={this.state.num2} sign={this.state.sign} />
            <Buttons
               handleClick={this.handleClick}
               result={this.result}
               comma={this.comma}
               reset={this.reset}
               reverseSign={this.reverseSign}
               deleteNum={this.deleteNum}
            />
         </div>
      );
   }
}

export default MyApp;
