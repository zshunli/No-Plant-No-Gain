//換相片
$(function() {
    $("#pdpic-ul img").click(function() {
        var N = $(this).attr("id").substr(2, 3);
        $("#main").attr("src", "assets/images/pdpic" + N + ".jpg");
    });

});
//評論區點按
var feild = document.querySelector('textarea');
var btn = document.querySelector('.btn');
var star = document.querySelector('.star');
feild.onfocus = function () {
    btn.style.display = 'block';
    star.style.display = 'block';

}
//全螢幕相片
var modal = document.getElementById("myModal");
var img = document.getElementById("main");
img.onclick = function() {
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close");
function closeModal() {
    modal.style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
//星等
var divStars = document.getElementById("my-rating-6");
var starNum = -1; //記錄當前第幾顆星星被點擊
var starArray = Array.from(divStars.children); //星星數組

//滑鼠移入
divStars.onmouseover = function (e) {
    if (e.target.tagName === "IMG") { //事件源是圖片
        //把滑鼠移動到的星星替換圖片
        e.target.src = "assets/images/star-2.png";
        //把滑鼠移動到的星星之前的星星替換圖片
        var prev = e.target.previousElementSibling;
        while (prev) {
            prev.src = "assets/images/star-2.png";
            prev = prev.previousElementSibling;
        }
        //把滑鼠移動到的星星之後的星星替換圖片
        var next = e.target.nextElementSibling;
        while (next) { //把滑鼠移動到的星星之後的星星替換圖片
            next.src = "assets/images/star.png";
            next = next.nextElementSibling;
        }
        var index = starArray.indexOf(e.target); //找到滑鼠移動到的星星的序號
    }
}

//滑鼠點擊
divStars.onclick = function (e) {
    if (e.target.tagName === "IMG") {
        //記錄當前點擊的星星序號
        starNum = starArray.indexOf(e.target);
    }
}

//滑鼠移出
divStars.onmouseout = function (e) {
    if (starNum !== -1) { //滑鼠點擊事件發生，將評分固定在點擊的星星上
        for (var i = 0; i < divStars.children.length; i++) {
            if (i <= starNum) {
                divStars.children[i].src = "assets/images/star-2.png";
            } else {
                divStars.children[i].src = "assets/images/star.png";
            }
        }

    } else {
        for (var i = 0; i < divStars.children.length; i++) {
            divStars.children[i].src = "assets/images/star.png";
        }
    }
}