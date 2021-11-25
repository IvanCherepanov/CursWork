window.onload = function() {
const box = document.querySelectorAll("div.box");
//console.log(box.length);

window.addEventListener('scroll', moveBoxes);

moveBoxes();

function moveBoxes(){
    //console.log(2);
    const trigger = window.innerHeight / 5 * 3.9;
    //console.log(trigger);
    //console.log(box.length);
    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop, trigger);
        if(boxTop < trigger){ 
            //console.log(11);
            box.classList.add('show');
           
        }
        else{
            box.classList.remove('show');
            console.log(3);
        }
    })
}
};