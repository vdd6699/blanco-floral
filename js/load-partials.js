// Hàm load file HTML vào phần tử theo id
function loadPartialMain(url, elementId) {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            console.log('Loading partial:', url, 'into element:', elementId);
            
            var el = document.getElementById(elementId);
            if (el) {
                console.log('Element found:', elementId);
                
                el.innerHTML = html;
            }
        });
}

// Gọi hàm để load header
loadPartialMain('components/header.html', 'header-main');
loadPartialMain('components/footer-main.html', 'super-footer-main');
loadPartialMain('components/footer-detail.html', 'super-footer');