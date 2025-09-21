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


/**
 * Render các filter-section với filter-title và các checkbox detail_name
 * @param {Array} options - Mảng các option từ API
 * @param {string} containerId - ID của phần tử chứa filter-group
 */
function renderFilterOptions(options, containerId) {
    var container = document.getElementById(containerId);
    console.log(options);
    
    if (!container) return;
    container.innerHTML = '';
    options.forEach(function(option) {
        var section = document.createElement('div');
        section.className = 'filter-section';
        var title = document.createElement('div');
        title.className = 'filter-title';
        title.textContent = option.option_name;
        section.appendChild(title);
        console.log(option);
        (option.lstShoppingOptionDetails || []).forEach(function(detail) {
            var div = document.createElement('div');
            div.className = 'filter-checkbox-row';
            var label = document.createElement('label');
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'filter-checkbox';
            label.appendChild(input);
            var span = document.createElement('span');
            span.textContent = detail.detail_name;
            label.appendChild(span);
            div.appendChild(label);
            section.appendChild(div);
        });
        container.appendChild(section);
    });
}

window.fetchOptions = fetchOptions;
window.renderFlowerFilters = renderFlowerFilters;
window.renderFilterOptions = renderFilterOptions;
