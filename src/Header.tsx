type Props = {
    title: string
    year: number
}

const Header = (props: Props) => {
    return (
        <h1>
            Hello {props.title}, Year ={props.year}
        </h1>
    )
}

export default Header
