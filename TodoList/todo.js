let inp=document.querySelector('input');
let btn=document.querySelector('button');
let taskList=document.querySelector('.taskList')
btn.addEventListener("click",()=>{
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let delbtn=document.createElement('button');
    delbtn.innerText="delete";

    li.innerText=inp.value;
    li.appendChild(delbtn);
    ul.appendChild(li);
    taskList.appendChild(ul)

    inp.value="";

    delbtn.addEventListener("click",()=>{
        delbtn.parentElement.remove();
    })

})