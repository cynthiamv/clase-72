// A partir de la siguiente lista de productos,
// hacer una web siguiendo el maquetado de ejemplo.

// Al escribir en el input el color o el tipo de un producto,
// se deben filtrar los productos.
// Funciona tanto apretando enter como haciendo clic en el boton.



const productos = [{
        nombre: 'Zapato negro',
        tipo: 'zapato',
        color: 'negro',
        img: './images/taco-negro.jpg',
    },
    {
        nombre: 'Zapato azul',
        tipo: 'zapato',
        color: 'azul',
        img: './images/taco-azul.jpg',
    },
    {
        nombre: 'Bota negra',
        tipo: 'bota',
        color: 'negro',
        img: './images/bota-negra.jpg',
    },
    {
        nombre: 'Bota azul',
        tipo: 'bota',
        color: 'azul',
        img: './images/bota-azul.jpg'
    },
    {
        nombre: 'Zapato rojo',
        tipo: 'zapato',
        color: 'rojo',
        img: './images/zapato-rojo.jpg',
    },
];


const form = document.querySelector("form")
const inputFiltro = document.querySelector("#input-filtro")
const sectionProductos = document.querySelector(".container-productos")

const mostrar = producto => {
    return `<div class="card">
                <div class="image">
                    <img src="${producto.img}" alt="">
                </div>
                <div class="name">
                    <h3>${producto.nombre}</h3>
                </div>
            </div>`
}

const mostrarTodosLosProductos = (catalogo) => {
    const productos = catalogo.map(producto => {
        return mostrar(producto);
    });
    console.log(productos)
    sectionProductos.innerHTML = productos.join(" ");
};

const productoFiltrado = input => {
    const listaProductos = productos.reduce((acc, curr) => {
        if (curr.nombre.toLowerCase().includes(input.value)) {
            acc += mostrar(curr);
        }
        return acc;
    }, "");

    sectionProductos.innerHTML = listaProductos;
}

mostrarTodosLosProductos(productos)

form.onsubmit = e => {
    e.preventDefault();
    productoFiltrado(inputFiltro)
} 