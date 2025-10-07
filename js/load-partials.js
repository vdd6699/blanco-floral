// Hàm load file HTML vào phần tử theo id
async function loadPartialMain(url, elementId) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        console.log('Loading partial:', url, 'into element:', elementId);

        var el = document.getElementById(elementId);
        if (el) {
            console.log('Element found:', elementId);

            el.innerHTML = html;
            setupMobileSidebar();
        }
    } catch (error) {
        console.error('Error loading partial:', error);
    }
}

function setupMobileSidebar() {
    var sidebarToggle = document.getElementById('sidebarToggle');
    var mobileSidebar = document.getElementById('mobileSidebar');
    var headerNav = document.querySelector('.header-nav');
    var headerNavMobile = document.querySelector('.header-nav-mobile');

    // Copy nav content to mobile sidebar
    if (headerNav && headerNavMobile) {
        headerNavMobile.innerHTML = headerNav.innerHTML;
    }

    // Show offcanvas when clicking toggle
    if (sidebarToggle && mobileSidebar && window.bootstrap && window.bootstrap.Offcanvas) {
        sidebarToggle.addEventListener('click', function () {
            var bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(mobileSidebar);
            bsOffcanvas.show();
        });
    }
}

// Đảm bảo có thể gọi lại sau khi load header/nav
window.setupMobileSidebar = setupMobileSidebar;
// Gọi hàm để load header
loadPartialMain('components/header.html', 'header-main');
loadPartialMain('components/footer-main.html', 'super-footer-main');
loadPartialMain('components/footer-detail.html', 'super-footer');