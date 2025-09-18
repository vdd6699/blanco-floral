// product.js
// Hàm cộng số lượng sản phẩm lên một
function incrementProductCount() {
    if (!window.productCount) {
        window.productCount = 0;
    }
    window.productCount++;
    var cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = window.productCount;
    }
    return window.productCount;
}

window.incrementProductCount = incrementProductCount;
