import React from "react";
import Calc from "../src/components/Calc";
import Buttons from "../src/components/Buttons";
import "./style.css";

class MyApp extends React.Component {
   constructor() {
      super();
      this.state = {
         num1: [],
         sign: "",
         num2: []
      };
   }

   handleClick = e => {
      let num = e.target.name;
      let buttonType = Number(num);
      console.log(this.state.sign.length);
      if ((Number.isInteger(buttonType) || num === ",") && this.state.sign.length === 0) {
         this.setState(prevState => {
            return {
               num1: prevState.num1.concat(num)
            };
         });
      } else if (!Number.isInteger(buttonType) && num !== ("reset", "del", ",")) {
         this.setState({
            sign: num
         });
      } else {
         this.setState(prevState => {
            return {
               num2: prevState.num2.concat(num)
            };
         });
      }
   };

   render() {
      const fullNum = this.state.num1.join("");
      console.log(fullNum);
      return (
         <div className="calculator">
            <Calc num1={this.state.num1} num2={this.state.num2} sign={this.state.sign} />
            <Buttons handleClick={this.handleClick} />
         </div>
      );
   }
}

export default MyApp;
