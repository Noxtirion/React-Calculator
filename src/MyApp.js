import React, { useState, useEffect } from "react";
import Calc from "../src/components/Calc";
import Buttons from "../src/components/Buttons";
import "./style.css";

function MyApp() {
   const [num1, setNum1] = useState("");
   const [sign, setSign] = useState("");
   const [num2, setNum2] = useState("");

   console.log(num1);
   useEffect(() => {
      const count1 = num1;
      const count2 = num2;

      (num1 === "NaN" || num1 === "Infinity" || num1 === "-Infinity") &&
         (setNum1("") && setSign("") && setNum2(""));

      if (count1 === "-" || count1 === "-0" || count1 === "-0.") {
         setNum1(0);
      } else if (count2 === "-" || count2 === "-0" || count2 === "-0.") {
         setNum2(0);
      }

      if (
         count1[0] === "0" &&
         count1[1] !== undefined &&
         count1[1] !== "." &&
         !count1.startsWith("0.", 2)
      ) {
         setNum1(count1[1]);
      } else if (
         count2[0] === "0" &&
         count2[1] !== undefined &&
         count2[1] !== "." &&
         !count2.startsWith("0.", 2)
      ) {
         setNum2(count2[1]);
      }
   }, [num1, sign, num2]);

   const handleClick = e => {
      let num = e.target.name;
      let numType = Number(num);

      if (Number.isInteger(numType) && sign === "" && num1.length <= 16) {
         setNum1(prevNum1 => prevNum1.concat(num));
      } else if (!Number.isInteger(numType) && num1 !== "") {
         setSign(num);
      } else if (Number.isInteger(numType) && sign !== "" && num2.length <= 16) {
         setNum2(prevNum2 => prevNum2.concat(num));
      }
   };

   const comma = e => {
      let dot = e.target.name;
      if ((num1 === "" && num2 === "") || (num1 !== "" && num2 === "" && sign !== "")) {
         dot = 0 + e.target.name;
      }

      if ((dot === "." || dot === "0.") && !num1.includes(".") && sign.length === 0) {
         setNum1(prevNum1 => prevNum1.concat(dot));
      } else if ((dot === "." || dot === "0.") && !num2.includes(".") && sign.length !== 0) {
         setNum2(prevNum2 => prevNum2.concat(dot));
      }
   };

   const result = () => {
      let multiply = (Number(num1) * Number(num2)).toString();
      let divide = (Number(num1) / Number(num2)).toString();
      let sum = (Number(num1) + Number(num2)).toString();
      let subtract = (Number(num1) - Number(num2)).toString();

      if (sign === "*") {
         setNum1(multiply);
         setNum2("");
      } else if (sign === "/") {
         setNum1(divide);
         setNum2("");
      } else if (sign === "+") {
         setNum1(sum);
         setNum2("");
      } else if (sign === "-") {
         setNum1(subtract);
         setNum2("");
      }
   };

   const reset = () => {
      setNum1("");
      setSign("");
      setNum2("");
   };

   const deleteNum = () => {
      if (num1 !== "" && sign === "") {
         setNum1(prevNum1 => prevNum1.slice(0, prevNum1.length - 1));
      } else if (sign !== "") {
         setNum2(prevNum2 => prevNum2.slice(0, prevNum2.length - 1));
      }
   };

   const reverseSign = () => {
      if (num1 !== "" && sign === "") {
         setNum1(prevNum1 => (parseFloat(prevNum1) * -1).toString());
      } else if (sign !== "" && num2 !== "") {
         setNum2(prevNum2 => (parseFloat(prevNum2) * -1).toString());
      }
   };

   return (
      <div className="calculator">
         <Calc num1={num1} num2={num2} sign={sign} />
         <Buttons
            handleClick={handleClick}
            result={result}
            comma={comma}
            reset={reset}
            reverseSign={reverseSign}
            deleteNum={deleteNum}
         />
      </div>
   );
}

export default MyApp;
