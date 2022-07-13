import makeHeader from "./header.js";


const BODY = document.querySelector("body");


const addComponents = function(component) {
  BODY.appendChild(component);
}

const createUi = function() {
  const header = makeHeader();
  addComponents(header); 
};

export default createUi;
