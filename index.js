const rootNode = document.getElementById("app");
//here rootnode has a reference of app
//what you want the dom to look like dom elements (what user experincing right now)
const root = ReactDOM.createRoot(rootNode);
let counterName="One"
root.render(React.createElement(App)); //create a react custom element;
function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "counters"),
    React.createElement(
      "section",
      null,
     counterName==="One"?React.createElement(Counter,{name:'ONNE'}):React.createElement(Counter,{name:'TWOO'})
    )
  );
}
function Counter({name}) {
 console.log(name)
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null,name),
    React.createElement("p", null, "You Clicked 1 time"),
    React.createElement("button", null, "Click Me")
  );
}
function Update(){
  counterName="Two"
  console.log("updating.....")
  root.render(React.createElement(App))///we are saying react to render brooo
  //nothing happens hmmm 
}
console.log(App());
//Transpilation changing the text of code written in one syntax and converting it into
//a different syntax that does the same thing.
//sometimes a transpiler is reffered to as a transformer.
//javascript syntax extension
