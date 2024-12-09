// ---création de la variable taskList---
// let taskList = document.getElementById("taskList"); //--recuperation de l'element qui possed l'ID tasklisit (liste non ordonée)code d'origine sans les sections
let toDoList = document.getElementById("toDoList");
let inProgressList = document.getElementById("inProgressList");
let doList = document.getElementById("doList")

// ---création de la fonction addTask---
function addTask() {
	// ---création de variable taskInpunt---
	let taskInput = document.getElementById("taskInput"); // element avec l'id taskInput

	// ---création de la variable taskText---
	let taskText = taskInput.value; // la variable sera egale à la valeur de taskInput (ce qui va remplir la tâche)

	// --- création de la condition if---
	if (taskText === "") {
		return;
	} // si taskText est strictement égale(===) à vide alors on ne fait rien : si l'utilisateur n'entre rien alors on ne fait rien

	// --- création de variable pour la li---
	let li = document.createElement("li"); // pour créer l'element li (la tâche)

	li.innerHTML = taskText; //le texte saisi par l'utilisateur

	toDoList.appendChild(li);
	taskInput.value = ""; // Une fois la tâche saisie laisse l'input vide

	//--- création du boutton modifier---
	//création de la variable modification
	let modifyButton = document.createElement("button");
	modifyButton.classList.add("modify");
	modifyButton.innerHTML = '<div><img src="./assets/Pen.png" alt="Modifier" class="icon"><a>Modifier</a></div>';

	modifyButton.onclick = function () {
		editTask(li);
	};

	// --- création du boutton effacer---
	// création de la variable effacer
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerHTML = '<div><img src="./assets/Trash.png" alt="Supprimer" class="icon"><a>Supprimer</a></div>';

	deleteButton.onclick = function () {
		deleteTask(li);
	};

	// --- création du boutton en cours---
	let inProgressButton = document.createElement("button");
	inProgressButton.classList.add("inProgress");
	inProgressButton.innerHTML = "En cours";
	inProgressButton.onclick = function () {
		moveToInProgress(li);
	};

	// --- création du boutton fait---
	let doButton = document.createElement("button");
	doButton.classList.add("do");
	doButton.innerHTML = "fait";
	doButton.onclick = function () {
		moveToDo(li);
	};

	li.appendChild(modifyButton); //li ajoute la li et appenChild(modifyButton ajoute le bouton modifier)
	li.appendChild(deleteButton); //li ajoute la li et appenChild(deleteButton ajoute le bouton supprimer)
	li.appendChild(inProgressButton); //li ajoute la li et appenChild(deleteButton ajoute le bouton en cours)
	li.appendChild(doButton); //li ajoute la li et appenChild(deleteButton ajoute le bouton fait)

	// --- création de la FONCTION modifier---
	function editTask(task) {
		let taskTextElement = task.firstChild;
		let taskText = taskTextElement.textContent;

		let newTaskText = prompt("Vous vous êtes trompé, cela arrive aux meilleurs ! Modifiez votre tâche 😉:", taskText);

		if (newTaskText === null || newTaskText === "") {
			return; // === : strictement égale --et-- || : ou bien
		}

		taskTextElement.textContent = newTaskText;
	}

	// --- création de la fonction supprimer---
	function deleteTask(task) {
		task.parentNode.removeChild(task);
	} // ---La propriété en lecture seule parentNodede l' Nodeinterface renvoie le parent du nœud spécifié dans l'arborescence DOM. Source MDN
}

// --- Ajout de la fonction de déplacement---
function moveToInProgress(taskElement) {
	// suppression des boutons pour ne pas les dupliquer
	taskElement.querySelector(".inProgress").remove();
	taskElement.querySelector(".do").remove();

	// ajout du bouton fait
	let doButton = document.createElement("button");
	doButton.classList.add("do");
	doButton.innerHTML = "fait";
	doButton.onclick = function () {
		moveToDo(taskElement);
	};

	taskElement.appendChild(doButton);
	inProgressList.appendChild(taskElement);
}

function moveToDo(taskElement) {
	// suppression du bouton fait
	taskElement.querySelector(".do").remove();

	doList.appendChild(taskElement);
}

// --- Ajout de la validation avec la touche entrée---
document.getElementById("taskInput").addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
}); // dans mon DOM l'element ayant l'ID "taskInput" ecoute un nouvel evenement lorsque l'utilisateur appuie sur enter et if vérifie l'action sur la touche enter et addTask ajoute la tâche
