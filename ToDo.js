// ---création de la variable taskList---
let taskList = document.getElementById("taskList"); //--recuperation de l'element qui possed l'ID tasklisit (liste non ordonée)

// ---création de la fonction addTask---
function addTask() {
	// ---création de variable taskInpunt---
	let taskInpunt = document.getElementById("taskInput"); // element avec l'id taskInput

	// ---création de la variable taskText---
	let taskText = taskInpunt.value; // la variable sera egale à la valeur de taskInput (ce qui va remplir la tâche)

	// --- création de la condition if---
	if (taskText === "") {
		return;
	} // si taskText est strictement égale(===) à vide alors on ne fait rien

	// --- création de variable pour la li---
	let li = document.createElement("li"); // pour créer l'element li (la tâche)

	li.innerHTML = taskText;

	taskList.appendChild(li);
	taskInpunt.value = ""; // Une fois la tâche saisie laisse l'input vide

}
