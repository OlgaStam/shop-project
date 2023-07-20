type Props = {
    title: string
    description: string
    author: string
}

const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
            <h4>{author}</h4>
        </>
    )
}

export default Article
