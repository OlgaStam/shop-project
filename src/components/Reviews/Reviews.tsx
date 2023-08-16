import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}
type ReviewType = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: ReviewType[] = [
        {
            name: 'Ava',
            text: 'I am very happy with my purchase at this store! Here I found my favorite iPhone at a great price, and it was the best purchase of my life! In addition, the store provided fast delivery and quality service, which caused only positive emotions',
        },
        {
            name: 'Stan Woods',
            text: 'Thank you for the wonderful service and excellent selection of iPhones in your store! I was pleasantly surprised with the quick delivery and high quality of the product. Great store for those who want to buy a quality iPhone at an affordable price. I recommend it!',
        },
    ]
    // 1. прописываем стейт для всех отзывов, указываем тип - массив

    const [reviews, setReviews] = useState<ReviewType[]>(arrReviews)

    // Данный код представляет использование хука useState в React и определение начального состояния для переменной reviews.

    // useState - это хук в React, который позволяет добавлять состояние в функциональные компоненты.
    // ReviewType[] - указывает тип данных, который будет храниться в состоянии переменной reviews. Здесь предполагается, что ReviewType - это тип данных, определенный где-то в вашем коде, который описывает структуру отзыва.
    // arrReviews - это массив, который служит начальным значением состояния переменной reviews.
    // Вместе эти строки кода объявляют переменную reviews и функцию setReviews, которая будет использоваться для обновления значения переменной reviews. При помощи хука useState вы можете получить текущее значение состояния переменной reviews и функцию setReviews, которая позволяет обновлять это значение.

    //3. прописываем стейт для данных полученных из формы от пользователя

    const [newReview, setNewReview] = useState<ReviewType>({
        name: '',
        text: '',
    })
    // 6. чтобы можно было писать в полях формы нужна ф-я (эта для имени - <HTMLInputElement>)
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: ReviewType) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    // (эта для текста - <HTMLTextAreaElement>)
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: ReviewType) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    // Данный код представляет собой функцию handleChangeName, которая обрабатывает изменение значения в поле ввода и обновляет состояние newReview с новым значением имени.
    // (e: React.ChangeEvent<HTMLInputElement>) - указывает на тип события изменения значения в поле ввода (ChangeEvent<HTMLInputElement>) и принимает его в качестве аргумента.
    //
    //     В данном случае, функция handleChangeName объявляется с аргументом e типа React.ChangeEvent<HTMLInputElement>. Здесь React.ChangeEvent - это обобщенный тип данных, предоставляемый библиотекой React, который представляет событие изменения элемента формы, а <HTMLInputElement> указывает, что это событие относится к элементу <input> типа HTMLInputElement. Таким образом, функция handleChangeName ожидает получить событие изменения значения в поле ввода типа HTMLInputElement.

    // Указание типа аргумента функции имеет несколько преимуществ:

    // Помогает обеспечить корректность типов данных и предотвратить ошибки во время выполнения, так как TypeScript или другой статический анализатор типов может проверить, соответствует ли переданный аргумент указанному типу.
    // Позволяет IDE (среде разработки) предоставлять подсказки и автодополнение на основе типа аргумента, что упрощает разработку и предотвращает опечатки.
    // Улучшает читаемость и понимание кода, так как типы аргументов явно указываются в определении функции.
    //
    // setNewReview((prevState: ReviewType) => ({ ...prevState, name: e.target.value })) - вызывает функцию setNewReview, которая обновляет состояние newReview на основе предыдущего состояния (prevState) и присваивает новое значение имени (e.target.value).

    // в консоли видно, как в объект записывается каждый введенный символ
    // console.log(newReview)

    // 9. ф-я чтобы стр не перезагружалась от формы
    // 11. полученные данные добавляем к предыдущим коментариям
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: ReviewType[]) => {
                return [...prevState, newReview]
            })
            // 12. почистили поля формы
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Reviews
            </Typography>
            {/* 2. выводим массив отзывов*/}
            {reviews.map(({ name, text }: ReviewType, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        marginBottom: '15px',
                    }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {name}:
                        </Typography>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            {/* В представленном коде используется метод map() для отображения массива reviews в виде карточек с использованием библиотеки Material-UI.

reviews.map() - вызов метода map() для итерации по массиву reviews и создания нового массива компонентов на основе каждого элемента массива.
({ name, text }: ReviewType, i) - деструктуризация объекта ReviewType, где name и text являются свойствами объекта ReviewType, а i - индекс текущего элемента массива.
<Card> - компонент карточки из библиотеки Material-UI.
variant="outlined" - опция компонента Card, указывающая на использование границы для карточки.
sx={{ marginBottom: '15px' }} - стилизация компонента Card с помощью объекта sx, где marginBottom задает отступ снизу для карточки.
key={i} - присваивание уникального ключа для каждой карточки, используя индекс элемента массива.
<CardContent> - компонент содержимого карточки, где располагаются данные отзыва.
<Typography variant="h6" component="div">{name}:</Typography> - компонент Typography из библиотеки Material-UI, используемый для отображения имени отзыва с определенным вариантом (variant="h6") и компонентом (component="div").
<div>{text}</div> - отображение текста отзыва внутри элемента div. */}


{/* 10. передаем onSabmit чтобы по нажатию кнопки стр не перезагружалась и не отправляла д-е*/}
            <form onSubmit={onSend}>
                <Typography variant="h5" component={'div'}>
                    Please leave a review
                </Typography>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        // 5. связываем поля со стейтом
                        value={newReview.name}
                        // 7. подключаем функцию
                        onChange={handleChangeName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your massage"
                        // 5. связываем поля со стейтом
                        value={newReview.text}
                        // 7. подключаем функцию
                        onChange={handleChangeText}
                    />
                </div>
                {/* 8. добавляем тип submit, потому что без него кнопка ничего не отсылает. при клике страница перезагружается, потому что это стандартное поведение формы, это нужно отменить, для этого еще одна ф-я */}
                <Button variant="outlined" type='submit'>Add Review</Button>
            </form>
        </>
    )
}

export default Reviews
