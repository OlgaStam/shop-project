import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="inherit">About us</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <NavLink to="/cart">Cart</NavLink>
            </Button>
        </>
    )
}
export default Menu
