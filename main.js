/*global $*/ 
$(function(){
    
    
    //スタートボタン 
    $("#start").click(function(){
        $("#time").html("00:00:00:0");
        
        timer = setInterval("countUp()", 100);
        
        $(this).attr("disabled", "disabled");
        $("#stop").removeAttr("disabled");
    });
    
    // ストップボタン
    $("#stop").click(function(){
        clearInterval(timer);
        
        $(this).attr("disabled", "disabled");
        $("#reset").removeAttr("disabled");
        $("#start").removeAttr("disabled");
    });
    
    // リセットボタン
    $("#reset").click(function(){
        
        millisec = 0;
        sec = 0;
        min = 0;
        hour = 0;
        
        $("#time").html("00:00:00:0");
        clearInterval(timer);
        
        $(this).attr("disabled", "disabled");
        $("#stop").attr("disabled", "disabled");
        $("#start").removeAttr("disabled");
    });
});
    var millisec = 0;
    var sec = 0;
    var min = 0;
    var hour = 0;
    var timer = 0;
    
    // カウント
    function countUp(){
        millisec += 1;
        
        if (millisec > 9) {
            millisec = 0;
            sec += 1;
        }
        
        if (sec > 59) {
            sec = 0;
            min += 1;
        }
        
        if (min > 59) {
            min = 0;
            hour += 1;
        }
        
        var milliseconds = millisec;
        
        if (sec < 10) {
            var seconds = "0" + sec.toString();
        } else {
            seconds = sec;
        }
        
        if (min < 10) {
            var minutes = "0" + min.toString();
        } else {
            minutes = min;
        }
        
        if (hour < 10) {
            var hours = "0" + hour.toString();
        } else {
            hours = hour;
        }
        
        $("#time").html(hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
    }