let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let taskList = document.querySelector(".taskList");
let delbtn = document.querySelector(".delBtn");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  li.innerText = inp.value;
  li.appendChild(delbtn);
  ul.appendChild(li);
  inp.value = "";
});

ul.addEventListener("click", (event) => {
  if(event.target.nodeName=="BUTTON"){
    event.target.parentElement.remove();
  }
  else{
    console.log("do not delete");
  }
});
