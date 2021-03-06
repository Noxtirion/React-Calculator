import React from "react";

function Buttons(props) {
   return (
      <div className="keyboard">
         <div className="keypart">
            <button name="reset" onClick={props.reset}>
               C
            </button>
            <button name="del" onClick={props.deleteNum}>
               ⇒
            </button>
            <button name="/" onClick={props.handleClick}>
               /
            </button>
            <button name="*" onClick={props.handleClick}>
               X
            </button>
         </div>

         <div className="keypart">
            <button name="7" onClick={props.handleClick}>
               7
            </button>
            <button name="8" onClick={props.handleClick}>
               8
            </button>
            <button name="9" onClick={props.handleClick}>
               9
            </button>
            <button name="-" onClick={props.handleClick}>
               -
            </button>
         </div>

         <div className="keypart">
            <button name="4" onClick={props.handleClick}>
               4
            </button>
            <button name="5" onClick={props.handleClick}>
               5
            </button>
            <button name="6" onClick={props.handleClick}>
               6
            </button>
            <button name="+" onClick={props.handleClick}>
               +
            </button>
         </div>

         <div className="keypart">
            <button name="1" onClick={props.handleClick}>
               1
            </button>
            <button name="2" onClick={props.handleClick}>
               2
            </button>
            <button name="3" onClick={props.handleClick}>
               3
            </button>
            <button name="=" onClick={props.result}>
               =
            </button>
         </div>

         <div className="keypart">
            <button name="" onClick={props.reverseSign}>
               + / -
            </button>
            <button className="0" name="0" onClick={props.handleClick}>
               0
            </button>
            <button name="." onClick={props.comma}>
               .
            </button>
         </div>
      </div>
   );
}

export default Buttons;
