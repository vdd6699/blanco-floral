/**
 * Lấy danh sách sản phẩm từ API (async/await)
 * @param {string} apiUrl - Đường dẫn API
 * @returns {Promise<Object>} - Promise trả về dữ liệu hoặc lỗi
 */
async function fetchOptions(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        window.productOptions = response.data;
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
        throw error;
    }
}

/**
 * Render các bộ lọc hoa ra UL
 * @param {Array} filters - Danh sách các bộ lọc
 * @param {string} ulId - ID của phần tử UL để gán danh sách bộ lọc vào
 */
function renderFlowerFilters(filters, ulId) {
    var ul = document.getElementById(ulId);
    if (ul) {
        ul.innerHTML = '';
        filters.forEach(function(item, idx) {
            var li = document.createElement('li');
            li.className = 'poppick_item';
            var a = document.createElement('a');
            a.href = '#';
            a.className = 'menu-item' + (idx === 0 ? ' active' : '');
            var name = item.filter_name;
            if (idx === filters.length - 1 && name.includes('and Funeral')) {
                name = name.replace('and Funeral', '').trim();
            }
            a.textContent = name;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }
}

window.fetchOptions = fetchOptions;
window.renderFlowerFilters = renderFlowerFilters;
