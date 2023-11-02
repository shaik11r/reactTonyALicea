const rootNode = document.getElementById("app");
//here rootnode has a reference of app
//what you want the dom to look like dom elements (what user experincing right now)
const root = ReactDOM.createRoot(rootNode);
let counterName = 1;
root.render(<App/>); //create a react custom element;
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
  root.render(<App/>); ///we are saying react to render brooo
  //nothing happens hmmm
}
console.log(App());
 
//createRoot is taking ref and creating a fiberrootnode 28627 it will create a construtor
//linkedlist store and add nodejs
//fiber Tree simple objects used by reacts code to store information and determing what work needs to be
// tree reconcilation 
//comparing two trees and finding the steps needed to make them match;
//what is the algorithm to find the smallest number of steps to change one tree to match another
//fibreetree works on small model and finds which is efficient
//react current adds the work in progress mathes the latest react element Tree;
//our react just moves backwards and fowards between work-in-progress and Current
/** reconcilation algorithm current tree and work in progress tree 
 * steps to take on the real tree is
 *  .delete an <li></li> it will delete the fiber node
 * react actually stops doing its work and give the browser oppurtunity to paint
 * //multiple problems at same time 
 * react even checks the olds props and newprops
 * memorize
 *store the result of a computation so you dont have to repeat the computation itself
 * if workinprogress.flags ==noflags means stop no need to work no pending updates
 * i.e is BAILOUT
 * events and click
 * EVENT BUBBLING
 * handling the event on the innermost element,and then moving up through the ancestors
 * to handle the same event li->a->a->button event bubbles up
 * EVENT CAPTURING 
 * Handling the event on the outermost element,and then moving down through the descendants
 * to handle the same event
 * EVENT DELEGATION
 * Assigning an event handler to an ancestor node in the tree
 *  */ 