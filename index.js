const rootNode = document.getElementById("app");
//here rootnode has a reference of app
//what you want the dom to look like dom elements (what user experincing right now)
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App)); //create a react custom element;
function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "counter"),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "click me")
  );
}
console.log(App());
//lets get the react things what they actually look like
let articleEle = document.getElementsByTagName("article");
let articleele = document.getElementsByTagName("article").item(0);
console.log(articleEle);
console.log(articleele);
// these elements doesnt exits for a while
//before react does this work asynchrously
setTimeout(() => {
  let articleEle = document.getElementsByTagName("article");
  let articleele = document.getElementsByTagName("article").item(0);
  console.log(articleEle);
  console.log(articleele);
}, 1000);
/** above we can see the code because now react is executed */
// created a tree of react elements tell react where react to add to dom and react does it work
