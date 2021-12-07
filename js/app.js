/* in inicializate form for create of eventlistener submit */
document.getElementById("form").addEventListener("submit", validate);

/* Create function validate for form */
function validate(event){
    
    /*Boolean Atribute validate for alert message  */
    let enviar = true;

    /* the inputs is called for Id for use the text in for keyboard */
    const producto = document.getElementById('name_producto').value
    const price = document.getElementById('price').value
    const stock = document.getElementById('stock').value

    /* Se llaman los span donde se adjuntaran los mensajes de validacion */
    const productoMessage = document.getElementById('name_validate');
    const priceMessage = document.getElementById('price_validate');
    const stockMessage = document.getElementById('stock_validate');

    /* Conditions for validate the information  */    

    /* Validation for input name product */
    if(producto == ""){

        productoMessage.innerHTML = "Campo requerido";
        enviar = false;
    }else{
        productoMessage.innerHTML = "";
        enviar = true;
    }

    /* Validation for input price */
    if(price == ""){

        priceMessage.innerHTML = "Campo requerido";
        enviar = false;

    }else if(price <= 0){

        priceMessage.innerHTML = "El precio debe ser mayor a 0";
        enviar = false;

    }else{
        priceMessage.innerHTML = "";
        enviar = true;
    }

    /* Validation for input stock */
    if(stock == ""){

        stockMessage.innerHTML = "Campo requerido";
        enviar = false;

    }else if(stock <= 0){

        stockMessage.innerHTML = "El stock del porducto debe ser mayor a 0"
        enviar = false;

    }else{
        stockMessage.innerHTML = "";
        enviar = true;
    }

    /* Conditional show alert confirm */
    if(enviar){

        confirm("Producto agregado");

    }

    /* Validation enviar is false, then fields are no clean */
    if(enviar == false){
        event.preventDefault();
    }
}
