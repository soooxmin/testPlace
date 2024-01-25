



// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
// let todos = document.getElementById('todos');

// btn.addEventListener('click', function () {
//     var list = document.createElement('li');

//     if(!input.value){
//         alert('nope');
//     }else{
//         list.innerText = input.value;
//         todos.appendChild(list);
//         input.value = ""
//     }
    
//     list.addEventListener('click',function () {
//         list.style.textDecoration = "line-through";
//     })
//     list.addEventListener('dblclick',function () {  
//         todos.removeChild(list);
//     })
// })


// const add = function () {
//     if
// }



let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let todos = document.getElementById('todos');

btn.addEventListener('click', function () {
    
    var list = document.createElement('li');

    if(!txt.value){
        alert('enter the text :)');
        // console.log("dfasdf");
    }else{
        list.innerText = txt.value;
        todos.appendChild(list);
        txt.value = "";
    }

    list.addEventListener('click',function () {
        list.style.textDecoration ='line-through';
    })
    list.addEventListener('dblclick',function () {
        todos.removeChild(list);
    })

})













