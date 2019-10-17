import React from "react";

function Calc(props) {
   return (
      <div className="screen">
         <p className="view">{props.num1}</p>
         <p className="view">{props.sign}</p>
         <p className="view">{props.num2}</p>
      </div>
   );
}

export default Calc;

