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