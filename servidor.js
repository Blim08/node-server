const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let taskList = [];

function addTask() {
    return new Promise((resolve, reject) => {
        rl.question('Introduce la descripción de la tarea: ', (description) => {
            if (description.trim() === '') {
                reject(new Error('La descripción de la tarea no puede estar vacía.'));
            } else {
                const task = {
                    id: taskList.length + 1,
                    description: description,
                    completed: false
                };
                taskList.push(task);
                console.log(`La tarea "${task.description}" ha sido añadida a la lista.`);
                resolve();
            }
        });
    });
}

function removeTask() {
    return new Promise((resolve, reject) => {
        rl.question('Introduce el número de la tarea que deseas eliminar: ', (taskId) => {
            const taskIndex = taskList.findIndex(task => task.id === parseInt(taskId));
            if (taskIndex !== -1) {
                const task = taskList[taskIndex];
                taskList.splice(taskIndex, 1);
                console.log(`La tarea "${task.description}" ha sido eliminada de la lista.`);
                resolve();
            } else {
                reject(new Error('No se encontró la tarea con el número indicado.'));
            }
        });
    });
}

function completeTask() {
    return new Promise((resolve, reject) => {
        rl.question('Introduce el número de la tarea que deseas marcar como completada: ', (taskId) => {
            const taskIndex = taskList.findIndex(task => task.id === parseInt(taskId));
            if (taskIndex !== -1) {
                const task = taskList[taskIndex];
                task.completed = true;
                console.log(`La tarea "${task.description}" ha sido marcada como completada.`);
                resolve();
            } else {
                reject(new Error('No se encontró la tarea con el número indicado.'));
            }
        });
    });
}

function showTasks() {
    console.log('Lista de tareas:');
    taskList.forEach(task => {
        console.log(`[${task.id}] ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
    });
    return Promise.resolve();
}

async function showMenu() {
    console.log('\n¿Qué acción deseas realizar?');
    console.log('[1] Añadir una tarea');
    console.log('[2] Eliminar una tarea');
    console.log('[3] Marcar una tarea como completada');
    console.log('[4] Mostrar la lista de tareas');
    console.log('[5] Salir');
    rl.question('Opción seleccionada: ', async (option) => {
        switch (option) {
            case '1':
                try {
                    await addTask();
                } catch (error) {
                    console.log(error.message);
                }
                showMenu();
                break;
            case '2':
                try {
                    await removeTask();
                } catch (error) {
                    console.log(error.message);
                }
                showMenu();
                break;
            case '3':
                try {
                    await completeTask();
                } catch (error) {
                    console.log(error.message);
                }
                showMenu();
                break;
            case '4':
                await showTasks();
                showMenu();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                showMenu();
                break;
        }
    });
}

showMenu();
