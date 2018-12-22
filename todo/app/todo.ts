interface ITodo {
	 
      name: string;
      desc: string;
      completed: boolean;  
}

class Todo implements ITodo {
		  constructor(public name: string, public desc: string, public completed: boolean) {}
}

class TodoList {
	
	  public static allTasks: Todo[] = new Array;

	  addTask(name: string, desc: string):number {

           let newTask = new Todo(name, desc, false);

           let total: number = TodoList.allTasks.push( newTask );

           return total; 
	  }

	  getAllTasks():Todo[] {

            return TodoList.allTasks; 
	  }
}

window.onload = function() {
	  console.log(window.localStorage)
	  let task = <HTMLInputElement>document.getElementById("myInput")

	   document.getElementById("myBtn").addEventListener('click', ()=>addTask(task.value) );

	   document.getElementById("myInput").addEventListener('keyup', function(event) {if(event.key == 'Enter'){ 

	   addTask(task.value) } });

	   let list = document.querySelector('ul')


	   list.addEventListener("click",(ev: MouseEvent) => {

	        let element = ev.target as HTMLElement

	            if(element.tagName === "LI") {

	               element.classList.toggle('checked')
	            } 
	   }) 
}

function closeTask(p:Element) {
	
	let node = <HTMLElement>p.parentNode;
	
	    node.style.display = "none" 
}

function addTask(task: string) {
	
      let todo = new TodoList();

      if(task == "") {alert("You must write an item!"); return;}

      todo.addTask(task,"");  

	  let ul = <HTMLElement>document.getElementById("tasks")	  
	   
	  let out = ""; let none:string = "none"

	  for(let i = 0; i < TodoList.allTasks.length; ++i) {
           
	      out = out + "<li>" + TodoList.allTasks[i].name + "<span class='close'>x</span></li>";
	  }

	  ul.innerHTML = out; 

	  let close = document.getElementsByClassName("close");

      for(let i = 0; i < close.length; ++i) {

          close[i].addEventListener('click', ()=>closeTask(close[i]) )              
      }
 
	  (<HTMLInputElement>document.getElementById("myInput")).value = ""	
      
}    