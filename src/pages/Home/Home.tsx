import ProductList from 'components/Products/ProductList'
type Props = {
    addProductToCart: (count: number, id: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return <ProductList addProductToCart={addProductToCart} />
}
export default Home
