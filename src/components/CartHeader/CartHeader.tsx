import productsArray, { Product, getProductsObject } from 'utils/productsArray'
// console.log(productsArray)
type Props = {
    productsInCart: {
        [id: number]: number
    }
}
//ненадежно привязываться к порядковому номеру в массиве как к уникальному
// перепишем массив в объект, в котором ключом будет айди, с помощью функции в utils/productsArray

// теперь экспорт из utils/productsArray ф-ю и тип

type productsObjectType = {
    [id: number]: Product
}
const CartHeader = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)

    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                            0
                )}
            </div>
        </div>
    )
}
export default CartHeader
