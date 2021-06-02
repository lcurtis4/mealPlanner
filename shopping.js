const items = [
    {
        id: 1,
        name: "Milk",
        price: 1.99
    },
    {
        id: 2,
        name: "Eggs",
        price: .79
    },
    {
        id: 3,
        name: "Pizza Rolls",
        price: 8
    },
    {
        id: 4,
        name: "steak",
        price: 20
    },
    {
        id: 5,
        name: "apples",
        price: 2.99
    },
    {
        id: 6,
        name: "Buns",
        price: 2.99
    },
    {
        id: 7,
        name: "Condiments",
        price: 1.99
    }
]

const addToShoppingList = (item) => {
    const lastIndex = items.length - 1 
    if (lastIndex === -1) {
        const newId = 1 
        return newId
    }
    const currentLastItem = items[lastIndex]
    const lastItemId = currentLastItem.id
    const newId = lastItemId + 1 
    item.id = newId
    items.push(item)
}

const chicken = {
    name: "chicken",
    price: 9,
    // new date is making a new object, then calling toLocale method of the date object. 
    dateCreated: new Date().toLocaleString()
}
addToShoppingList(chicken)

for (const item of items) {
    if (item.price >= 8) {
        console.log(item)
    }
}