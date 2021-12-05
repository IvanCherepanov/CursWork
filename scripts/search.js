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
  function myFunctionF() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toLowerCase();
    if (filter in arr){
      window.location.href=arr[filter];
      
    }
    else{
      alert("Страница не найдена");
    }
  }
  if (sear){
    sear.addEventListener("click", e=>{
        e.preventDefault();
        myFunctionF();
      });
      }
}
