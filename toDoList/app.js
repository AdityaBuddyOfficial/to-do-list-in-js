const inputVal=document.getElementById("input-box");
const list_of_task= document.getElementById("list-of-task");
const searchElement=document.getElementById("searchBox");
const searchinput=document.getElementById("searchBox");

let taskArray=[];




// taskArray.unshift(inputVal.value);

function AddTask(){
    let count=taskArray.length;

    if(inputVal.value===''){
        alert("enter the task")
    }
    else{
       
        taskArray.push(inputVal.value);
        let list= document.createElement("li");
        list.innerHTML=taskArray[count];
        list_of_task.appendChild(list);
        console.log(taskArray);
        let spanbox=document.createElement("span");
        spanbox.innerHTML="X";
        list.appendChild(spanbox);
         console.log(list.value);
    }
    inputVal.value="";
    count--;
    // return list;
}


list_of_task.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        // let element=e.target.tagName.value;
        // let index = taskArray.indexOf(inputVal.value);
        // taskArray.splice(index, 1)
        e.target.parentElement.remove();
    }
})


list_of_task.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
})







let dataToBeSearched=searchElement.value;
function searchTask(){
    console.log(dataToBeSearched);
}





// function highlight(){
//     list_of_task.addEventListener('click',function(e){
//         if(e.target.tagName==="LI"){
//             e.target.classList.toggle("checked");
//         }
//     })
// }



// console.log(data);



searchinput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    const searchStr=e.target.value.toLowerCase();
    let items= list_of_task.getElementsByTagName("li");
    console.log(items);
    for(let i=0;i<=items.length;i++){
     
            let ValueLi= items.target.value;
            if(ValueLi==searchStr){
               
            }
        
    }
})

// console.log(list_of_task);