// ---création de la variable taskList---
let taskList = document.getElementById("taskList"); //--recuperation de l'element qui possed l'ID tasklisit (liste non ordonée)

// ---création de la fonction addTask---
function addTask() {
	// ---création de variable taskInpunt---
	let taskInput = document.getElementById("taskInput"); // element avec l'id taskInput

	// ---création de la variable taskText---
	let taskText = taskInput.value; // la variable sera egale à la valeur de taskInput (ce qui va remplir la tâche)

	// --- création de la condition if---
	if (taskText === "") {
		return;
	} // si taskText est strictement égale(===) à vide alors on ne fait rien : si l'utilisateur n'entre rie alor on ne fait rien

	// --- création de variable pour la li---
	let li = document.createElement("li"); // pour créer l'element li (la tâche)

	li.innerHTML = taskText; //le texte saisi par l'utilisateur

	taskList.appendChild(li);
	taskInput.value = ""; // Une fois la tâche saisie laisse l'input vide

	//--- création du boutton modifier---
	//création de la variable modification
	let modifyButton = document.createElement("button");

	modifyButton.innerHTML = '<div><img src="./assets/Pen.png" alt="Modifier" class="icon"><a>Modifier</a></div>';

	modifyButton.onclick = function () {
		editTask(li);
	};

	// --- création du boutton effacer---
	// création de la variable effacer
	let deleteButton = document.createElement("button");

	deleteButton.innerHTML = '<div><img src="./assets/Trash.png" alt="Supprimer" class="icon"><a>Supprimer</a></div>';

	deleteButton.onclick = function () {
		deleteTask(li);
	};

	li.appendChild(modifyButton);
	li.appendChild(deleteButton);

	// --- création de la FONCTION modifier---
	function editTask(task) {
		let taskTextElement = task.firstChild;
		let taskText = taskTextElement.textContent;

		let newTaskText = prompt("Modifiez vôtre tâche:", taskText);

		if (newTaskText === null || newTaskText === "") {
			return; // === : strictement égale --et-- || : ou bien
		}

		taskTextElement.textContent = newTaskText;
	}

	// --- création de la fonction supprimer---
	function deleteTask(task) {
		taskList.removeChild(task);
	}
}

// --- Ajout de la validation avec la touche entrer---
document.getElementById("taskInput").addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
}); // dans mon DOM l'element ayant l'ID "taskInput" ecoute un nouvel evenement lorsque l'utilisateur appuie sur enter et if vérifie l'action sur la touche enter et addTask ajoute la tâche
