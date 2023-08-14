import productsArray from 'utils/productsArray'
// console.log(productsArray)
type Props = {
    productsInCart: {
        [id: number]: number
    }
} 
//ненадежно привязываться к порядковому номеру в массиве как к уникальному
// перепишем массив в объект, в котором ключом будет айди, с помощью функции в utils/productsArray
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId) - 1].title}:
                   
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
