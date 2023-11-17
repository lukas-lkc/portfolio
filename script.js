//espera que o DOM seja carregado
document.addEventListener('DOMContentLoaded', function () {
    var headerBar = document.getElementById('header_bar');
    var navHeader = document.getElementById('nav_header');
    var container = document.getElementById('container');
    var showSidebar = false;

    function btn() {
        showSidebar = !showSidebar;
        if (showSidebar) {
            navHeader.style.marginLeft = '-10vw';
            navHeader.style.animationName = 'showSidebar';
            container.style.filter = 'blur(2px)';
        } else {
            navHeader.style.marginLeft = '-100vw';
            navHeader.style.animationName = '';
            container.style.filter = '';
        }
    }

    function closeSidebar() {
        if (showSidebar) {
            btn();
        }
    }
    //quando alterar o tamanho da tela
    window.addEventListener('resize', function (event) {
        if (window.innerWidth > 640 && showSidebar) {
            btn();
        }
    })
});