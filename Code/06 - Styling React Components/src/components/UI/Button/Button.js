import React from "react";
// import "./Button.css";

import styles from "./Button.module.css";
// import styled from "styled-components";

// If you wanna learn more: tact template literal syntax
// const Button = styled.button``; => <button type="submit" class="sc-braxZu kPgSJC">Add Goal</button>

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

/* styled.p | styled.h1 | styled.h2 | styled.div ...
  this button method, and that's the interesting part, will return a new button component.
  Actually, that styled package has methods for all HTML elements.
  It has p method for a paragraph h1, h2 and so on for the h1, h2 tags, div to create a div and so on.
  It's all there and here we need the button.
*/

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
    // className={styles.button} => <button type="submit" class="Button_button__FL0-I">Add Goal</button>
  );
};

export default Button;

/* **[Button.module.css]**
<style>
  .Button_button__FL0-I {
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  }

  .Button_button__FL0-I:focus {
    outline: none;
  }

  .Button_button__FL0-I:hover,
  .Button_button__FL0-I:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24ubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix1Q0FBdUM7QUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiMDA1ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzhiMDA1ZDtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyLFxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2FjMGU3NztcclxuICBib3JkZXItY29sb3I6ICNhYzBlNzc7XHJcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= *\/
</style >
*/
