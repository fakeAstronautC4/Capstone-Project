const addBtnList = document.getElementsByClassName('add-to-order')
const subComment = document.getElementById('fff')

function addingToCart(event) {
    console.log(event.target)
    let btn = event.target
    if(btn.textContent != 'ADDED!') {
    const pizzaName = btn.name
    // changing text content of the element
    btn.textContent = "ADDED!";
    // passing in the type of element
    let toBeAdded = document.createElement('li');
    // adding attributes
    toBeAdded.textContent = pizzaName;
    toBeAdded.className = "rrr"
    // find the location to append it
    const location = document.querySelector('#cart-items');
    // appending it into the location :)
    location.appendChild(toBeAdded);

    
    let buttonsToBeAdded = document.createElement('button');
    buttonsToBeAdded.className = "bi bi-dash-circle"
    buttonsToBeAdded.name = "stuffy"
    buttonsToBeAdded.type = 'button'
    toBeAdded.appendChild(buttonsToBeAdded);
    buttonsToBeAdded.addEventListener('click', decrease) 
    //=================================================================//
    
    let counter = document.createElement('a')
    counter.textContent = 1
    toBeAdded.appendChild(counter)
    //=================================================================//
    
    let buttonsToBeAdded1 = document.createElement('button');
    buttonsToBeAdded1.className = "bi bi-plus-circle lmao"
    buttonsToBeAdded1.name = 'stuffie'
    buttonsToBeAdded1.type = 'button'
    toBeAdded.appendChild(buttonsToBeAdded1);
    buttonsToBeAdded1.addEventListener('click', increase)
    let cartTotal = document.getElementById('999')
    cartTotal.textContent = parseInt(cartTotal.textContent) + Math.round(btn.value)
    console.log(cartTotal)
    console.log(cartTotal.textContent)
    //=================================================================//
        function decrease (event) {
            if(counter.textContent > 1){
                counter.textContent--
                let pizzaPrice = Math.round(btn.value);
                cartTotal.textContent = parseInt(cartTotal.textContent) - parseInt(pizzaPrice)        
                console.log(total)
            } else {
                let pizzaPrice = Math.round(btn.value);
                cartTotal.textContent = parseInt(cartTotal.textContent) - parseInt(pizzaPrice)
                toBeAdded.remove()
                btn.textContent = 'ADD TO ORDER'
            }
        }
        function increase (event) {
            counter.textContent ++
            let pizzaPrice = Math.round(btn.value);
            cartTotal.textContent = parseInt(cartTotal.textContent) + parseInt(pizzaPrice)
            console.log(total)
        }

    } else {
        alert('This item has been added to your cart!')}
}
for(i = 0; i < addBtnList.length; i++){
    addBtnList[i].addEventListener('click', addingToCart)
}

const upComment = (event) => {
    event.preventDefault()
    const inputName = document.getElementById('123')
    const commentText = document.getElementById('456')

    let commentObj = {
        name: inputName.value,
        comment: commentText.value
    }
    console.log(commentObj)

    axios.post("http://localhost:5000/comment", commentObj)
        .then(res => {
            const data = res.data
            alert(data);
        })
        .catch(err => {
            console.log(err);
        })
}

subComment.addEventListener('submit', upComment)
