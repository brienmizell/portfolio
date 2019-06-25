import React from "react";
import "./App.css";

// const textStyling = {
//   color: 'red',
//   web-kit-stroke-color: 'red'
// }

function App() {
  return (
    <div className="hint-text">
      <div className="text-line">
        <p
          className="t-bottom scale-down"
          style={{ letterSpacing: "0.11em", paddingLeft: "30px" }}
        >
          BRIEN
        </p>
        <p
          className="abs outline t-top scale-up"
          style={{ letterSpacing: "0.11em", paddingLeft: "30px" }}
        >
          BRIEN
        </p>
      </div>
      <div className="text-line">
        <p className="outline scale-down t-top">MIZELL</p>
        <p className="abs scale-up t-bottom">MIZELL</p>
      </div>
    </div>
  );
}

export default App;

// <div class="hint-text">
//   <div class="text-line">
//     <p
//       class="t-bottom scale-down"
//       style="color: <
//   ?php echo $animatedTextColor ?>; -webkit-text-stroke-color
//   : <?php echo $animatedTextColor ?>;"
//     >
//       THINK
//     </p>
//     <p
//       class="abs outline t-top scale-up"
//       style="-
//   webkit-text-stroke-color: <?php echo $animatedTextColor ?>
//   ;"
//     >
//       THINK
//     </p>
//   </div>
//   <div class="text-line">
//     <p
//       class="outline scale-down t-top"
//       style="-we
//   bkit-text-stroke-color: <?php echo $animatedTextColor ?>;"
//     >
//       HINT
//     </p>
//     <p
//       class="abs scale-up t-bottom"
//       style="color:
//   <?php echo $animatedTextColor ?>; -webkit-text-stroke-col
//   or: <?php echo $animatedTextColor ?>;"
//     >
//       HINT
//     </p>
//   </div>
// </div>;
