window.onload = function() {
const sear = document.querySelector(".mybtn");
//console.log(sear);
function myFunctionF() {
    
  // Объявить переменные
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();

  ul = document.getElementById("myTopnav");
  li = ul.querySelectorAll("a");
  let flag=false;
    
  // Прокрутите все элементы списка и скройте те, которые не соответствуют поисковому запросу
  for (i = 0; i < li.length; i++) {
    a = li[i].href;
    let result = a.match(/\w+\.html+$/);
    if (result){
    let answer=result[0].slice(0, -5);
    //console.log(a);
    console.log(result[0].slice(0, -5));
    console.log(a, answer,filter);
    if (answer.toUpperCase()===filter) {
      //alert("Найдено");
      window.location.href=a;
      flag=true;
      break;
    } }
  }
  if (flag==false){
      alert("not found");
  }
}

if (sear){
sear.addEventListener("click", e=>{
    e.preventDefault();
    myFunctionF();
  });
  }
}