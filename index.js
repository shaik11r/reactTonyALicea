const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App)); //create a react custom element;
function App() {
  console.log("called me");
  return React.createElement("button", null, "clickme");
}
console.log("this is fun",App());
console.log(React.createElement(App));
//we react.createElement(app) type:"function f App()"
// react knows this is function so calls this not expression
/**
 * $$typeof: Symbol(react.element)
key: null
props: {children: 'clickme'}
ref: null
type: "button"
_owner: null
_store
: 
{validated: false}
 */
/**
 * react element tree simple objects used by reacts code ;
 */
