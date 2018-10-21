var myTotal;
var myTotal2;
var myNow;
var myNow2;
var myLose;
var winspar;


function calculate(){
    myTotal=parseFloat(document.myform.total.value);
    myNow=parseFloat(document.myform.now.value);
    myTotal2=Math.floor(myTotal/100)*100;
    myNow2=Math.floor(myNow/100)*100;
    myLose=myTotal2-myNow2;
    winspar=(myTotal2/(myTotal2+myLose))*100;
    winspar=Math.floor(winspar*1000)/1000;
    document.myform.winspar.value=winspar;
}
function ima(){
  html2canvas(document.getElementsByClassName("par"),{
    onrendered: function(canvas){
      //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
      var imgData = canvas.toDataURL();
      document.getElementById("result").src = imgData;
      //document.getElementById("result").data-url = imgData;
    }
  });
}
