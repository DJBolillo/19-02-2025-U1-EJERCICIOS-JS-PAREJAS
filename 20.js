let tareas = []; 

function agregarTarea(id, descripcion) {
    tareas.push({ id, descripcion, completado: false });
}


function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
}

function completarTarea(id) {
    tareas = tareas.map(tarea => 
        tarea.id === id ? { ...tarea, completado: true } : tarea
    );
}

// Ejemplo de uso:
agregarTarea(1, "Realizar la tarea para el 19");
agregarTarea(2, "Desayuno con la familia");
console.log(tareas);

completarTarea(1);
console.log(tareas);

eliminarTarea(2);
console.log(tareas);
