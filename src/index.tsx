import React from 'react'
import ReactDOM from 'react-dom/client'

//элементы всегда возвращаем один элемент (много заворачиваем в один)
//компоненты перепишем в виде стрелковой функции
// для компонентов используют ПаскальКейс, для обычных функций кэмелКейс
// вызываются как теги
const Header = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit reprehenderit aliquam, possimus repellendus
                error esse provident sit quis quia architecto repellat adipisci
                consectetur sed. Non et aspernatur rem dolorem!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit reprehenderit aliquam, possimus repellendus
                error esse provident sit quis quia architecto repellat adipisci
                consectetur sed. Non et aspernatur rem dolorem!
            </p>
        </>
    )
}
//большая вложеннось дивов не айс, придумали реакт-фрагмент
//<React.Fragment> или просто <>
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}
//в рут передаем только корневой компонент, его структуру расписываем выше
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
