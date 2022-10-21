var input = document.getElementById('myInp');
var add = document.getElementById('add');
var toDo = document.getElementById('toDo');
var clear = document.getElementById('clear');
add.addEventListener('click', function () {
    var paragraph = document.createElement('h2')
    paragraph.innerText = input.value;
    toDo.appendChild(paragraph);
    paragraph.addEventListener('dblclick', function () {
        paragraph.style.display = "none"
    })
})
clear.addEventListener('click', function () {
    toDo.style.display = "none"
})


let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
       document.body.classList.add('active');
    }
    else{
       document.body.classList.remove('active');
    }
 }