// JavaScript source code

//Changing menu bar text color on hover
$(".header ul li a").hover(function () {
    $(this).css("color", "#9e0020");
}, function () {
    $(this).css("color", "#ededed");
});


//Changing fb logo color on hover
$(".closing ul #fb").hover(function () {
    $(".closing ul #fb a").css("color", "#9e0020");
    $(".closing ul img").attr("src", function (index, attr) {
        return attr.replace("images/end_bar_images/facebookico.png", "images/end_bar_images/facebookico2.png");
    });
}, function () {
    $(".closing ul #fb a").css("color", "#5c9642");
    $(".closing ul img").attr("src", function (index, attr) {
        return attr.replace("images/end_bar_images/facebookico2.png", "images/end_bar_images/facebookico.png");
    });
});

//Changing email color on hover
$(".closing ul #email").hover(function () {
    $(".closing ul #email a").css("color", "#9e0020");
    $(".closing ul img").attr("src", function (index, attr) {
        return attr.replace("images/end_bar_images/emailico.png", "images/end_bar_images/emailico2.png");
    });
}, function () {
    $(".closing ul #email a").css("color", "#5c9642");
    $(".closing ul img").attr("src", function (index, attr) {
        return attr.replace("images/end_bar_images/emailico2.png", "images/end_bar_images/emailico.png");
    });
});

//Changing closing bar text color on hover
$(".closing ul #orgsync a").hover(function () {
    $(this).css("color", "#9e0020");
}, function () {
    $(this).css("color", "#5c9642");
});