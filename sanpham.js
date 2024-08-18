function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function seeProduct(Describe, Price) {
  
    document.getElementById("modal-description").textContent = Describe;
    document.getElementById("productPrice").textContent = Price;

    // Show the modal
    var modal = document.getElementById("description-modal");
    modal.style.display = "block";
}

function closeViewProduct() {
    var modal = document.getElementById("description-modal");
    modal.style.display = "none";
}

function isLoggin() {
    return localStorage.getItem('isLoggin') === 'true';
}

function seeProducts() {
    let productDescription = document.getElementById("product-description");
    let description = "Nộm sứa là một món ăn đặc sản của miền biển Việt Nam, nổi bật với hương vị thanh mát và giòn sần sật của sứa. Sứa được chọn làm nộm thường là loại sứa tươi ngon, sau khi làm sạch và ngâm với nước muối để giảm độ nhờn và mùi tanh. Sau đó, sứa được trộn đều với các loại rau sống như bắp chuối, cà rốt, dưa leo, và rau thơm như húng quế, rau răm."
}