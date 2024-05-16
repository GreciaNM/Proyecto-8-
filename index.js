let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let imagen = document.getElementById("imagen");
let descripcion = document.getElementById("descripcion");
let idTarea = document.getElementById("idTarea");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");


let tareas = [
    {
        nombre: "Grecia Navarrete",
        fecha: "2005-12-04",
        descripcion: "Cumpleaños de Grecia ",
        video: "video.mp4",
        audio: "audio.mp3",
        imagen: "https://th.bing.com/th/id/OIP.8JH9fjkVfeDCT9g0jYMGxgHaEk?rs=1&pid=ImgDetMain"
    }
];



let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-1 border p-3 m-0.5'>
            <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-1 border p-3'>
            <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-1 border p-3'>
            <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-3 border p-3 text-center'>
                <video width="100%" height="100%" controls>
                    <source src="${tarea.video}" type="video/mp4">
                </video>
            </div>
            <div class='col-2 border p-3 text-center'>
                <img src="${tarea.imagen}" class="img-fluid">
            </div>
            <div class='col-2 border p-3 text-center'>
                <audio controls>
                    <source src="${tarea.audio}" type="audio/mpeg">
                </audio>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick='editarTarea(${index})'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
            <button class='btn btn-danger' onclick='borrarTarea(${index})'>Eliminar</button>
            </div>
        </div>
        `;
    });
}
mostrarTareas();
let AgregarDatos = () => {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        video: video.value,
        audio: audio.value,
        imagen: imagen.value
    };
    console.log(datos);
    tareas.push(datos);
    mostrarTareas();

}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}

let borrarTarea = (index) => {
    tareas.splice(index, 1);
    mostrarTareas();
}

let editarTarea = (index) => {
    nombreEditar.value = tareas[index].nombre;
    fechaEditar.value = tareas[index].fecha;
    descripcionEditar.value = tareas[index].descripcion;
    videoEditar.value = tareas[index].video;
    audioEditar.value = tareas[index].audio;
    imagenEditar.value = tareas[index].imagen;
    idTarea.value = index;
}

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    tareas[indice].video = videoEditar.value;
    tareas[indice].audio = audioEditar.value;
    tareas[indice].imagen = imagenEditar.value;
    cerrarModalEditar();
    mostrarTareas();
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    AgregarDatos();
    cerrarModal();
    formulario.reset();
});
