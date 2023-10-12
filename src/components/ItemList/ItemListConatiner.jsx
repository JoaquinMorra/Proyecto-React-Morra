import { useEffect } from 'react';
// Traemos el getFirestore
import {doc, getFirestore} from 'firebase/firestore'
import '../ItemList/ItemListContainer.css';
const ItemListContainer = (props) => {
    return(
        <div className='container'>
            <p className='saludo'>{props.saludo}</p>
        </div>
    )
}

// funcion que nos da firebase para traer un doc de firestore --> Esta funcion en realidad la tenemos que usar en el detalle del item o del producto.
useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'items', 'AGciUBhPAdUsqLD3PI5k')
    getDoc(queryDoc)
    .then(resp =>console.log(resp))

},[])
export default ItemListContainer