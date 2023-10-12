import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


import "./CartContent.css"



const CartElements = () => {
const { cart } = useContext(dataContext)
    return cart.map((product) => {
        return(
            <div className="cartcontent" key={product.id}>
                <img src={product.img} alt="product-card"/>
                <h3 className="nombre">{product.nombre}</h3>
                <h4 className="precio">{product.Precio}$</h4>
            </div>
        )
    })
}

export default CartElements