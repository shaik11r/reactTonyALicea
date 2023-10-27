// let item = document.getElementById("ind");
// console.log(item);
// let newitem=document.createElement("li");
// newitem.textContent="four"
// item.appendChild(newitem);

//html => creates a Dom  => render/paint the page 
// const countElement=document.getElementById("count");
// function setCountfun(){
//     let count=Number(countElement.textContent);
//     count=count+1;
//     countElement.textContent=count;
// }
//imperative programming 
//we are setting value incrementing step by step 
const countApp={
    getCount:()=>{
        const element=document.getElementById("count");
        return Number(element.textContent); 
    },
    setCount:(val)=>{
        const countElement=document.getElementById("count");
        countElement.textContent=val;
    }
}
function setCount(){
    let count=countApp.getCount();
    if(count>=5){
        countApp.setCount(0)
    }
    else{
        countApp.setCount(count+1);
    }
}
//declarative piece of code;
//react is fb devs imperative code which makes our life easier
