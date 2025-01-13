document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      const li = document.createElement("li");
      
      // Criar checkbox
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.classList.add("task-check");
      
      // Criar texto da tarefa
      const taskText = document.createElement("span");
      taskText.textContent = taskInput.value;
      
      // Criar botão de excluir
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete"; // Ou podemos usar um ícone aqui
      deleteButton.classList.add("delete-btn"); // Adiciona uma classe para estilizar o botão
      
      // Lógica para excluir a tarefa
      deleteButton.addEventListener("click", () => {
        li.remove();
      });
      
      // Adicionar os elementos no li
      li.appendChild(checkBox);
      li.appendChild(taskText);
  
      // Adicionar botão de excluir fora do li
      const deleteWrapper = document.createElement("div");
      deleteWrapper.classList.add("delete-wrapper");
      deleteWrapper.appendChild(deleteButton);
  
      // Adiciona a tarefa e o botão de excluir ao taskList
      taskList.appendChild(li);
      li.appendChild(deleteWrapper); // Adiciona o botão de excluir fora da caixa

      // Limpar o campo de entrada
      taskInput.value = "";
    }

    
});

