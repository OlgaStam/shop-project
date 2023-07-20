//snippet tsrafce
import React from 'react'
import './Article.css'

type Props = {
    title: string
    description: string
    author: string
}
//стилизация с CSS
const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h2 className="article-title">{title}</h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </>
    )
}

export default Article
