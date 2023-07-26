type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '14',
        price: 1400,
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '13',
        price: 1300,
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '12',
        price: 1200,
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '11',
        price: 1100,
    },
    {
        id: 5,
        title: 'iPhone 10',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '10',
        price: 1000,
    },
    {
        id: 6,
        title: 'iPhone 9',
        description: 'This is iPhone 9',
        type: 'phone',
        capacity: '9',
        price: 900,
    },
    
]
export default productsArray