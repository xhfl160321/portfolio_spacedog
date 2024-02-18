var navBar = $("#nav_bar");
var navBtnShow = $("i.fas.fa-ellipsis");
var navBtnhide = $("i.fas.fa-xmark");


// media query 시 작동되는 메뉴 이벤트
navBtnShow.click(function () {
    navBar.css({ "right": "0" });
    console.log("menu show");
});

navBtnhide.click(function () {
    navBar.css({ "right": "-200px" });
    console.log("menu hide");
});

// 클릭 시 부드러운 이동
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});