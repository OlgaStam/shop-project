//snippet tsrafce
import React from 'react'

type Props = {
    title: string
    description: string
    author: string
}
//добавим стили, style - это объект, сожно передать разные свойства, и переменные (это позже)
const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h2
                style={{
                    backgroundColor: 'purple',
                    color: 'white',
                    padding: '15px',
                }}
            >
                {title}
            </h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </>
    )
}

export default Article
