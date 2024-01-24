$(document).ready(function(){
    //햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리 
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });


    new fullpage('#wrap', {
        scrollBar: true,
        anchors : ['anchor1','anchor2','anchor3','anchor4'],
        scrollingSpeed: 300,
        normalScrollElements : '.sec-4,.sec-5,.footer',
        fitToSection: false,
        // 반응형설정
        responsiveWidth: 1800,
        responsiveHeight: 890,
    });
    // new fullpage('#wrap', {
    //     licenseKey: 'YOUR_KEY_HERE'
    // });

    //sub-menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    // const main_menu = document.querySelector(".main-menu li");
    // main_menu.addEventListener("mouseenter", function(){
    // });

    $(".main-menu li").mouseenter(function(){
        let result = $(this).attr('data-tab');
        // result 라는 변수를 만들어서 .main-menu li 에 data-tab 속성을 저장해줌
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');


        //서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

        //헤더 색상변경
        $('.header-area,.header-logo svg').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,.header-logo svg').removeClass('active');
    });

    //sec-4 swiper
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop:true, //계속 무한 재생
        speed: 500, //굴러가는 스피드 조절
        autoplay:{
            delay: 1500 //자동으로 굴러가는 스와이퍼 지연시간 조절
        }
    });
  

    // 상단이동버튼 300px 이상일때 로고 사이즈 변경하기(active 설정해놓음) / 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게) -> 클릭했을때 최상단으로 이동하는 부분까지!
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 300){
            //로고 사이즈 변경
            $('.header-logo').addClass('active');
            $('.top-btn').fadeIn();
        }else{
            $('.header-logo').removeClass('active');
            $('.top-btn').fadeOut();
        }
    });


    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });
});

