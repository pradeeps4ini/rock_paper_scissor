import logo from "../assets/images/logo-bonus.svg";

const headerChildren = `
    <h1><img src="../assets/images/logo-bonus.svg" alt="logo of the rock paper scissor lizard spock game"></h1>
      <div class="score">
        <p>SCORE</p>
        <p class="score-count">00</p>
      </div>
`;

const makeHeader = function() {
  const header = document.createElement("header");
  header.innerHTML = headerChildren;
  return header;
};


export default makeHeader;
