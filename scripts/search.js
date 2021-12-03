window.onload = function() {
  const sear = document.querySelector(".mybtn");
  const arr = {
    солнце: 'sun.html',
    меркурий: 'mercury.html',
    венера: 'venus.html',
    земля: 'earth.html',
    марс: 'mars.html',
    юпитер: 'jupiter.html',
    сатурн: 'saturn.html',
    уран: 'uranus.html',
    нептун: 'neptune.html',
    гелерея: 'gallery.html',
    кометы: 'comets.html',
    ученые: 'scientists.html',
    главная: 'index.html'
  };
  //console.log(sear);
  function myFunctionF() {
    console.log(1);
    // Объявить переменные
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toLowerCase();
    // Прокрутите все элементы списка и скройте те, которые не соответствуют поисковому запросу
    if (filter in arr){
      console.log(2);
      window.location.href=arr[filter];
      
    }
    else{
      alert("Not found");
    }
  }
  if (sear){
    sear.addEventListener("click", e=>{
        e.preventDefault();
        myFunctionF();
      });
      }
}
