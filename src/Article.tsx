//snippet tsrafce
import React from 'react'

type Props = {
    title: string
    description: string
    author: string
}
//стилизация с условиями
const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h2
                style={{
                    backgroundColor: title === 'News 1' ? 'purple' : 'green',
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
