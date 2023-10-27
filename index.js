let markup = {
  type: "article",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
    {
      type: "h3",
      children: [
        {
          type: "text",
          value: "Counter2",
        },
      ],
    },
    {
      type: "h1",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
    {
      type: "h3",
      children: [
        {
          type: "text",
          value: "Counter2",
        },
      ],
    },
  ],
};
//fake dom haha
console.log(markup);
const main=document.getElementById("app");
console.log(main);

function addElements(pojoElement,parentDOMNode){
    let DOMNode=pojoElement.type==="text"?document.createTextNode(pojoElement.value):document.createElement(pojoElement.type);
    if(pojoElement.children){
        pojoElement.children.forEach((child)=>{
            addElements(child,DOMNode);
        })
    }
    parentDOMNode.appendChild(DOMNode);
}
addElements(markup,main);