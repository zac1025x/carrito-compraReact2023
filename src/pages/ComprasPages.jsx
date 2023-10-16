import { Card } from "../components/Card"
import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPages = () => {
  
    const {productos } = useContext(ProductosContext)

    const {
      listaCompras,
      agregarCompra,
      aumentarCantidad,
      disminuirCompra,
      eliminarCompra,
    } = useContext(CarritoContext);

    const handleAgregarr = (compra)=>{
      agregarCompra(compra)
    }
    const handleQuitar = (id)=>{
      eliminarCompra(id)
    }
    const handleAumentar = (id)=>{

    }
    const handleDisminuir = (id)=>{

    }

  return (
    <>  
        <h1>Compras: </h1>
        <hr />
        {productos.map(producto =>(
            <Card key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregarr= {()=> handleAgregarr(producto)}
            handleQuitar ={()=>handleQuitar(producto.id)}
            ></Card>
        ))}
        
    </>
  )
}


