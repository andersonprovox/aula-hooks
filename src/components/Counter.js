function Counter() {
    let quantity = 10;

    function upQuantity(){
        quantity = quantity + 1;
        console.log(quantity);
        document.getElementById('counter-box').innerHTML = quantity;
    }

    return(
        <div>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </div>
        
    )
}

export default Counter;