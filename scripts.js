const list = document.querySelector('ul')


const formatCurrency = (value) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
showAll = (productsArray) => {
    let myLi = ''

    productsArray.forEach((products) => {
        myLi +=
            `
        <li>   
                <p class="name">${products.name}</p>
                <img src=${products.src}>
                <p class="price">${'Price: ' + formatCurrency(products.price)}</p> 
        </li>
    `
    })
    list.innerHTML = myLi
}

apllyDiscount = () => {
    const discount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.5
    }))
    showAll(discount)
}

sumPrices = () => {
    const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `
         <li> 
                <p class="price">${'Price: ' + formatCurrency(sum)}</p> 
        </li>
        `
}
veganFilter = () => {
    const filt = menuOptions.filter((product) => product.vegan === true)
    showAll(filt)
}
