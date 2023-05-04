const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })
  let listaTareas = [];
  
  function agregarTarea(indicador, descripcion, estado){
    let nuevaTarea = {
      indicador: indicador, 
      descripcion: descripcion,
      estado: estado
    }
  
    listaTareas.push(nuevaTarea)
    console.log("nueva Tarea")
  }
  
  function eliminarTarea(indicador){
    listaTareas = listaTareas.filter((tarea) => tarea.indicador != indicador)
    console.log("tarea eliminada")
  }
  
  function completarTarea(indicador){
    listaTareas.map((tarea) => {
      if (tarea.indicador === indicador){
        tarea.estado = true;
      }
      return tarea;
    })
    console.log("tarea completada")
  }
  
  function iniciarPrograma(){
    readline.question(`escriba segun el caso:
    1:añadir tarea
    2:eliminar tarea
    3:completar tarea
    4:finalizar tarea
    =>`, (opcion) =>{
      opcion = opcion.trim().toLowerCase();
  
  
      switch (opcion) {
        case "1":
          console.log('-- Añadir tarea --')
          readline.question("coloque el indicador de la tarea: ", (indicador) =>{
           readline.question("escriba la descripcion de la tarea: ",(descripcion) =>{
            agregarTarea(indicador, descripcion, false);
            console.log(listaTareas);
            iniciarPrograma();
           });
          });
          
          break;
          case "2":
            console.log('-- eliminar tarea --')
            readline.question("coloque el indicador de la tarea: ", (indicador) =>{
              eliminarTarea(indicador);
              console.log("tarea eliminada correctamente");
              console.log(listaTareas);
              iniciarPrograma();
            });
            break
            case "3":
              console.log('-- completar tarea --')
            readline.question("coloque el indicador de la tarea: ", (indicador) =>{
              completarTarea(indicador);
              console.log("tarea completada correctamente");
              console.log(listaTareas);
              iniciarPrograma();
            });
            break
            case "4":
              readline.close()
            break;
        default:
          console.log("opcion no valida")
          iniciarPrograma();
      }
    });
  }
  iniciarPrograma()