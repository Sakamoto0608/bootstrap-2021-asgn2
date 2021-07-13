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
    //日付調整
    $('.birthday').change(function(){
        var month = $('.birthday.month').val();
        month = Number(month);
        var day = $('.birthday.day').val();
        day = Number(day);
        switch(month){
            case 4:
            case 6:
            case 9:
            case 11:
                if(day >= 31){
                    $('.birthday.day').val(30);
                    
                }
                break;
            case 2:
                if(day >= 29){
                    var year = $('.birthday.year').val();
                    year = Number(year);
                    if(isLeapYear(year)){
                        $('.birthday.day').val(29);
                        return;
                    }
                    $('.birthday.day').val(28);
                }
        }
        // var html = '<span style="color:red">セレクトボックス</span>でchangeイベントが実行されました！';
        // $('#test').html(html);
    });
    //うるう年チェック
    function isLeapYear(year){
        if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return true;
        }
        return false;
    }
});