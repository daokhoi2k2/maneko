$("*").ready(function() {
    // Tắt menu mobile
    $(".nav-mobile-close-btn").click(function() {
        $(".nav-mobile").css("display","none");
        // bật nút Mobile khi bật menu
        $(".header__primary-btn-mobile").css("display","block");
    });
    // Bật menu mobile
    $(".header__primary-btn-mobile").click(function() {
        $(".nav-mobile").css("display","flex");
        // tắt nút Mobile khi bật menu
        $(".header__primary-btn-mobile").css("display","none");
    });
})