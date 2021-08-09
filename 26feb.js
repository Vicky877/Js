var List = document.getElementById('todo-list');
var Firstitem = document.getElementById('Item1');
var second = document.getElementById("Item2");
var btn = document.getElementById('add-item');
var NewEle = document.getElementById("myText");
var update = document.getElementById('update-item');
var Remove = document.getElementById('remove-item');
var element = '';
NewEle.addEventListener('input', function(e) {
    element = e.target.value;

});
NewEle.addEventListener("keyup", function(event) {
    if (event.keyCode !== 13) {
        debugger;
    } else {
        add();
    }
});

function create() {
    var newListElement = document.createElement('li');
    var Textnode = document.createTextNode(element);
    newListElement.id = (List.childElementCount + 1);
    newListElement.appendChild(Textnode);
    return newListElement;
}

function add() {
    if (element != "") {
        var newListElement = create();
        List.appendChild(newListElement);
        NewEle.value = '';
        element = '';
    } else {
        alert("Please Enter value");
    }
}

btn.addEventListener('click', add);
update.addEventListener('click', function() {
    var newe = create();
    if (element != '') {
        var First = List.firstElementChild;
        List.replaceChild(newe, First);
    } else {
        alert("No Value in text box");
    }

});
Remove.addEventListener('click', function() {
    var First = List.firstElementChild;
    List.removeChild(First);
});