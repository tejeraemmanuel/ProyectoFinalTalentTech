/* Variable global para almacenar los productos seleccionados */
let carrito = [];

const agregarAlCarrito = (nombre, precio) => {
    /* Agregar el producto como objeto al carrito */
    carrito.push({nombre, precio})

    /* Actualizar el contador visual del carrito */
    actualizarContador()
    /* Muestra alerta de confirmacion */
    alert(`Agregaste: ${nombre} al carrito`)
}


/* Funcion para actualizar el contador del carrito */
const actualizarContador = ()=>{
    /* Cambiamos el contenido del HTML con el ID contador-carrito */
    document.getElementById("contador-carrito").textContent = carrito.length
}

/* Guarda ek cibtebudi dek carruti eb ek almacenamiento local antes de cerrar la pagina */
window.addEventListener("beforeunload",()=>{
localStorage.setItem("carrito", JSON.stringify(carrito))
});