const getElemetInput=id=>{
    const productText=document.getElementById(id)
    const productResult=productText.value;
    return productResult;
}

const addItems=()=>{
    const product=getElemetInput('input-name')
    const quantity=getElemetInput('input-age')
    disply(product,quantity);
    // localStorage.setItem(product,quantity)
    saveItems(product,quantity)
}

const getLocalStoreByText=()=>{
    let saveCart=localStorage.getItem("cart")
    let cart={}
    if(saveCart){
        cart=JSON.parse(saveCart)
    }
    return cart;
}
const saveItems=(product,quantity)=>{
    const cart=getLocalStoreByText();

    cart[product]=quantity;
    const cartSringify=JSON.stringify(cart)
    localStorage.setItem("cart",cartSringify)
}
const disply=(product,quantity)=>{
    const container=document.getElementById("container")
    const li=document.createElement('li')
    li.innerText=`${product}  ${quantity}`
    container.appendChild(li)
}

const displayShowing=()=>{
    const cart=getLocalStoreByText();
    for(const product in cart){
        const quantity=cart[product]
        console.log(product,quantity)
        disply(product,quantity)
    }
}
displayShowing()