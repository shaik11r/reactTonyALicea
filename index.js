const rootNode = document.getElementById("app");
//here rootnode has a reference of app
//what you want the dom to look like dom elements (what user experincing right now)
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App)); //create a react custom element;
function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "counters"),
    React.createElement(
      "section",
      null,
      React.createElement(Counter, { name: "nadeenshaik" }),
      React.createElement(Counter, null)
    )
  );
}
function Counter({name}) {
  name="newName"; //we can change the props but dont do it props should be immutable
  console.log(name);
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "counter"),
    React.createElement("p", null, "You Clicked 1 time"),
    React.createElement("button", null, "Click Me")
  );
}

console.log(App());
