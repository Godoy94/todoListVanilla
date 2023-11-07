// Função que adiciona uma tarefa à lista
function addTaskToTheList() {
    const getTaskTextInput = document.getElementById('taskInput');
    const getTaskList = document.getElementById('taskList');
    
    const taskText = getTaskTextInput.value.trim();
    
    if (taskText) {
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
      getTaskList.appendChild(newTask);
      getTaskTextInput.value = '';
    }
  }
  
  const addTaskButton = document.getElementById('addTask');
  addTaskButton.addEventListener('click', addTaskToTheList);
  