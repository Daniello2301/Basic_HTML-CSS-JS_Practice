function captureValues(){
    let emailUser = document.getElementById('name_producto').value
    let passwordUser = document.getElementById('descriptio_product').value

    let massage = "Producto: " + emailUser + " registrado correctamente";

    document.getElementById('message').innerHTML = massage;
}