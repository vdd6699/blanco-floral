/**
 * Lấy danh sách sản phẩm từ API
 * @param {string} apiUrl - Đường dẫn API
 * @param {function} callback - Hàm callback nhận dữ liệu hoặc lỗi
 */
function fetchProducts(apiUrl, callback) {
    axios.get(apiUrl)
        .then(function(response) {
            callback(response.data, null);
        })
        .catch(function(error) {
            console.error('Lỗi khi lấy sản phẩm:', error);
            callback(null, error);
        });
}

window.fetchProducts = fetchProducts;
