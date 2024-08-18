document.addEventListener("DOMContentLoaded", function() {
    var completeOrderBtn = document.getElementById("btn-complete-order");
    completeOrderBtn.addEventListener("click", function() {
        event.preventDefault();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length == 0) {
            alert("Giỏ hàng trống, vui lòng thêm sản phẩm vào giỏ hàng");
        } else {
        alert("Đã hoàn tất đơn hàng, chúng tôi sẽ gửi thông báo về mail của bạn");
        }
    });
})

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('checkout-container');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Giỏ hàng của bạn hiện đang trống!</p>';
    } else {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            let product = cart[i];
            let productItem = document.createElement('div');
            productItem.classList.add('checkout-item');
            productItem.innerHTML = `
                <p>Tên sản phẩm: ${product.name}</p>
                <p>Giá: ${product.price} VND</p>
            `;
            cartContainer.appendChild(productItem);

            totalPrice += product.price;

        }
        totalPriceElement.innerHTML = `Tong tien: ${totalPrice} VND`;
    }
});