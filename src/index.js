/*Déclaration des variables*/
let activeDark = document.querySelector(".toggle-btn");
let body = document.querySelector(".body");
let headerDark = document.querySelector(".header");
let formDark = document.querySelectorAll(".form-control");
let todosDark = document.querySelectorAll("section .todos");
let addToTrash = document.querySelector(".far");
let SearchTodo = document.getElementById("search");
let todoTab = [];
let addtodo = document.querySelector(".textTodos");
let todoItems = document.querySelector(".todo-items");
let addtodo_btn = document.querySelector(".addTodo-btn");
let resetSearchBtn = document.querySelector(".resetSearch-btn");
let searchBtn = document.querySelector(".searchBtn");

//Greffache des évènements
activeDark.addEventListener("click", activedark);
//addtodo.addEventListener("keydown", addtodof);
addtodo_btn.addEventListener("click", addtodof);
addToTrash.addEventListener("click", deleteCardExemple);

//function des principales fonctionnalités
function activedark() {
  addtodo_btn.classList.toggle("btnDark");
  resetSearchBtn.classList.toggle("btnDark");
  searchBtn.classList.toggle("btnDark");
  activeDark.classList.toggle("activeDarkMode");
  if (!activeDark.classList.contains("activeDarkmode")) {
    body.classList.toggle("backgroundDark");
    headerDark.classList.toggle("headerDark");
    for (let i = 0; i < formDark.length; i++) {
      formDark[i].classList.toggle("contentDark");
    }
    for (let i = 0; i < todosDark.length; i++) {
      todosDark[i].classList.toggle("contentDark");
    }
  }
}
function addtodof() {
  if (addtodo.value !== "") {
    let div = document.createElement("div");
    todoItems.appendChild(div);
    div.className = "todos";
    if (!todosDark[0].classList.contains("contentDark")) {
      div.classList.remove("contentDark");
    } else {
      div.classList.add("contentDark");
    }
    let span = document.createElement("span");
    span.className = "todos-title";
    div.appendChild(span);
    span.textContent = addtodo.value;
    let i = document.createElement("i");
    i.className = "far fa-trash-alt";
    div.appendChild(i);
    /*permettre à l'utilisateur de supprimer une tache */
    i.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
    todoTab.push(span);
    console.log(todoTab);

    searchBtn.addEventListener("click", searchf);
    function searchf() {
      let searchText = SearchTodo.value;
      if (SearchTodo.value !== "") {
        for (let i = 0; i < todoTab.length; i++) {
          const element = todoTab[i];
          let parent = element.parentNode;
          parent.style.display = "none";
          if (element.textContent.includes(searchText)) {
            parent.style.display = "flex";
            element.classList.add("searchResult");
            console.log("trouvé");
          } else {
            console.log("pas trouvé");
          }
        }
        resetSearchBtn.style.display = "block";
        resetSearchBtn.addEventListener("click", chowAllTodo);
        function chowAllTodo() {
          for (let i = 0; i < todoTab.length; i++) {
            let parent = todoTab[i].parentNode;
            parent.style.display = "flex";
          }
          resetSearchBtn.style.display = "none";
        }
        SearchTodo.value = "";
      }
    }
    addtodo.value = "";
    todosDark = document.querySelectorAll("section .todos");
  }
}
function deleteCardExemple() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
