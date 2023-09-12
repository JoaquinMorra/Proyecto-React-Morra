import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import '../Products/Products.css'


const Products = () => {
const {data, cart, setCart} = useContext(dataContext)

const buyProducts = (product) =>{
    console.log(product)
    setCart([...cart,product]);
};
    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt='Imagen hilo' />
                <h3>{product.nombre}</h3>
                <h4>{product.Precio}$</h4>
                <button onClick={()=>buyProducts(product)}>Comprar</button>
            </div>
        )
    })
}

export default Products