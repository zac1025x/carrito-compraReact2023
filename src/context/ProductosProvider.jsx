import React from "react";
import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({children}) => {
    
    const [productos, setProductos] = useState([])
    const urlBase = `https://fakestoreapi.com/products`
    
    const fetchProductos = async ()=>{
        const response = await fetch(urlBase)
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }


    useEffect(() => {
      fetchProductos()
    }, [])
    


  return (
    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
  )
}


