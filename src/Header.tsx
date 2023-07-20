type Props = {
    title: string
    year: number
}

const Header = ({ title, year }: Props) => {
    //пропсы - это объект, тоже можно деструктуризировать
    // console.log(props)
    return (
        <h1>
            {/* Hello {props.title}, Year ={props.year} */}
            Hello {title}, Year ={year}
        </h1>
    )
}

export default Header

const user = {
    name: 'Jack',
    age: 20,
}
//способ использования объекта без деструктурезации
// const name = user.name
// const name = user.age

//способ использования объекта с деструктурезацией
const { name, age } = user
//пропсы - это объект, тоже можно деструктуризировать
