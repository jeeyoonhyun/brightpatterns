var brightCount = 0;

var palette = ["71, 79%, 89%", "168, 20%, 85%", "149, 49%, 83%", "8, 52%, 89%", "11, 93%, 74%"];

function unEnter(target) {
    $(target).keydown(function(e) {
        // alert( "Handler for .keydown() called." );
        $(target).each(function(key, value) {
            var that = $(this);
            setTimeout(function(){
                if (that.is(":focus")) {
                    that.val(that.val().slice(0,-2));
                } else {
                    that.val(that.val().slice(0,-1));
                }
                introCopy.html(p5field.value());
                that.width(that.width()-50);
                that.css("opacity", that.css("opacity")-0.02);
                if (that.val() == "") {
                    that.hide();
                    brightCount += 1;
                    var bgString = "hsl(" + palette[Math.floor(Math.random()*palette.length)] +")";
                    // var bgString = "hsl("+random(280,340)+","+random(80,100)+"%,"+(20+2*brightCount)+"%)"
                    $("html").css("background-color", bgString);
                }
            }, 1);
          });
        // e.preventDefault();
        // e.stopPropagation();
    })
}

function unCheck(target) {
    $(target).click(function(e) {
        $(target).each(function() {
            var that = $(this);
                if (that.find(".checkTarget").is(":checked") == false) {
                    that.hide();
                    brightCount += 1;
                    var bgString = "hsl("+random(280,340)+","+random(80,100)+"%,"+(20+2*brightCount)+"%)"
                    $("html").css("background-color", bgString);
                }
        });
    });
}

function main() {
    unEnter(".aTarget");
    unEnter(".bTarget");
    unEnter(".cTarget");
    unEnter(".dTarget");
    unCheck(".cBox");

    $("form").submit(function(e){
        var check = 1;
        $('form .checkInput').each(function() {
            console.log($(this).val());
            if($(this).val()!=false) {
                check = 0;
            }
        });
        $('form .checkCbox').each(function() {
            console.log($(this).is(":checked"));
            if($(this).is(":checked") != false) {
                check = 0;
            }
        });
        if (check == 0) {
            alert("필수 항목은 빈 칸으로 남겨놓아야 합니다.");
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

$(document).ready(function(){

});