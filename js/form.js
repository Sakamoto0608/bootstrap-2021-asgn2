$(function(){
    //年の最小値
    const MINYEAR = 1900;
    var date = new Date();
    var year = date.getFullYear();

    //年月日のプルダウン
    for(var i = MINYEAR; i < year;i++){
        $(".year").append("<option>" + i + "</option>");
    }
    for(var i = 1; i <= 12;i++){
        $(".month").append("<option>" + i + "</option>");
    }
    for(var i = 1; i <= 31;i++){
        $(".day").append("<option>" + i + "</option>");
    }
});