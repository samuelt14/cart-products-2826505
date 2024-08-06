const carrito = [
    {
        id : 1,
        nombre : "Lenovo LEGION",
        precio : 3500000,
        descripcion : "Computador laptop",
        caracteristicas : {
            dimensiones: {
                largo : 50,
                ancho : 30,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 2,
        nombre : "audifonos beats",
        precio : 1500000,
        descripcion : "audifonos de alta fidelidad",
        caracteristicas : {
            dimensiones: {
                largo : 2,
                ancho : 2,
                alto : 2
            },
            fabricacion : {
                pais : "vietnam",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 3,
        nombre : "motorola g60",
        precio : 2300000,
        descripcion : "telefono inteligente",
        caracteristicas : {
            dimensiones: {
                largo : 15,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 4,
        nombre : "AMD 5 5600G",
        precio : 600000,
        descripcion : "procesador pc de torre",
        caracteristicas : {
            dimensiones: {
                largo : 5,
                ancho : 5,
                alto : 0.5
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 4,
        nombre : "xiaomi redim note 11",
        precio : 800000,
        descripcion : "telefono inteligente",
        caracteristicas : {
            dimensiones: {
                largo : 16,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
]
for ( articulo of carrito){
    

const { nombre, precio } = articulo
console.log(nombre, precio)
}
