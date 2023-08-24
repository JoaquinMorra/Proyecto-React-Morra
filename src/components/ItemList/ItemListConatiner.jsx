import '../ItemList/ItemListContainer.css';
const ItemListContainer = (props) => {
    return(
        <div className='container'>
            <p className='saludo'>{props.saludo}</p>
        </div>
    )
}
export default ItemListContainer