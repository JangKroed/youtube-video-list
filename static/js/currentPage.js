// 해당 페이지에 빨간 밑줄을 쳐 표시하는 함수
export function currentPage(url){
    if (url=="/") {
        $(".nav-left__home").css("box-shadow", "0 -3px 0px  red inset");
    }else if(url=="/music"){
        $(".nav-left__music").css("box-shadow", "0 -3px 0px  red inset");
    }else if(url=="/game"){
        $(".nav-left__game").css("box-shadow", "0 -3px 0px  red inset");
    }else if(url=="/movie"){
        $(".nav-left__movie").css("box-shadow", "0 -3px 0px  red inset");
    }
}
