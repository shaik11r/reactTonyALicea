const rootNode = document.getElementById("app");
//here rootnode has a reference of app
//what you want the dom to look like dom elements (what user experincing right now)
const root = ReactDOM.createRoot(rootNode);
let counterName = 1;
root.render(React.createElement(App)); //create a react custom element;
function App() {
  return (
    <section>
      <h1>Counter</h1>
      <section>
        <Counter name={"nadeenshaik"}></Counter>
        <button onClick={Update}>update</button>
      </section>
    </section>
  );
}
function Counter({ name }) {
  console.log(name);
  return (
    <article>
      <h1>Counter</h1>
      <h2>{name}</h2>
      <h3>here count is : {counterName}</h3>
    </article>
  );
}
function Update() {
  counterName = counterName + 1;
  console.log("updating.....");
  root.render(React.createElement(App)); ///we are saying react to render brooo
  //nothing happens hmmm
}
console.log(App());
//Transpilation changing the text of code written in one syntax and converting it into
//a different syntax that does the same thing.
//sometimes a transpiler is reffered to as a transformer.
//javascript syntax extension
//jsx has no semantics im just create a new tag\
/**
 * funtion App(){
 * return;
 * }
 */
//fragments <> this is how we can do it because if a div is used then it will create a lot of dom
//</> div has no sematics use div as last possible elements
//depth of the dom tree  
