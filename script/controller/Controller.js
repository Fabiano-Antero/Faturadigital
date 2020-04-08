// váriavel com o host do endpoint
var host = 'https://homolog-api.energisa.com.br/wsfme/1.0/FaturaEmail/';

var emailFatura = "faturasonline@energisa.com.br"



function getChave() {
  let chave = {};
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m,key,value) {
      chave[key] = value;
  });
  return chave
}

var keyParam = getChave();


function getMoib() {

  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    return document.getElementById("gPlay").style.display = "none";
  }
  else if (userAgent.match(/Android/i)) {
    return document.getElementById("iosPlay").style.display = "none";
  }
  else {
    return null;
  }

} 

getChave();
getMoib();


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})