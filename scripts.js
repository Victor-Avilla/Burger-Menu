const list = document.querySelector('ul')
let myLi = ''

menuOptions.forEach((product) =>{
    myLi+=
    `
        <li>   
                <p class="name">${product.name}</p>
                <img src=${product.src}>
                <p class="price">${'Price: U$'+ product.price+',00'}</p> 
        </li>
    `
})

list.innerHTML = myLi
