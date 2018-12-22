var Todo = /** @class */ (function () {
    function Todo(name, desc, completed) {
        this.name = name;
        this.desc = desc;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (name, desc) {
        var newTask = new Todo(name, desc, false);
        var total = TodoList.allTasks.push(newTask);
        return total;
    };
    TodoList.prototype.getAllTasks = function () {
        return TodoList.allTasks;
    };
    TodoList.allTasks = new Array;
    return TodoList;
}());
window.onload = function () {
    console.log(window.localStorage);
    var task = document.getElementById("myInput");
    document.getElementById("myBtn").addEventListener('click', function () { return addTask(task.value); });
    document.getElementById("myInput").addEventListener('keyup', function (event) {
        if (event.key == 'Enter') {
            addTask(task.value);
        }
    });
    var list = document.querySelector('ul');
    list.addEventListener("click", function (ev) {
        var element = ev.target;
        if (element.tagName === "LI") {
            element.classList.toggle('checked');
        }
    });
};
function closeTask(p) {
    var node = p.parentNode;
    node.style.display = "none";
}
function addTask(task) {
    var todo = new TodoList();
    if (task == "") {
        alert("You must write an item!");
        return;
    }
    todo.addTask(task, "");
    var ul = document.getElementById("tasks");
    var out = "";
    var none = "none";
    for (var i = 0; i < TodoList.allTasks.length; ++i) {
        out = out + "<li>" + TodoList.allTasks[i].name + "<span class='close'>x</span></li>";
    }
    ul.innerHTML = out;
    var close = document.getElementsByClassName("close");
    var _loop_1 = function (i) {
        close[i].addEventListener('click', function () { return closeTask(close[i]); });
    };
    for (var i = 0; i < close.length; ++i) {
        _loop_1(i);
    }
    document.getElementById("myInput").value = "";
}
