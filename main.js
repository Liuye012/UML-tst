document.getElementById('number').addEventListener("keydown",function(evt){
  console.log(String.fromCharCode(evt.keyCode));
  if(evt.keyCode<8||(evt.keyCode>8 && evt.keyCode<48)|| evt.keyCode>57 ){
    evt.preventDefault();
  }
});

document.getElementById("danxuan1").addEventListener(function () {

});
