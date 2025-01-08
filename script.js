document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
        // Cria um novo item da lista
        const li = document.createElement("li");
        
        // Cria o checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"; // Tipo do input (checkbox)
        
        // Cria o texto da tarefa
        const text = document.createTextNode(taskInput.value);
        
        // Adiciona o checkbox e o texto dentro do item da lista
        li.appendChild(checkbox);
        li.appendChild(text);
  
        // Adiciona a funcionalidade de marcar como concluída
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.classList.add("completed"); // Adiciona a classe "completed" quando o checkbox é marcado
            } else {
                li.classList.remove("completed"); // Remove a classe "completed" quando o checkbox é desmarcado
            }
        });
  
        taskList.appendChild(li);
        taskInput.value = ""; // Limpa o campo de entrada
    }
});
