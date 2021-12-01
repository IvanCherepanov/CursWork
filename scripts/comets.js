const box = document.querySelectorAll('.box');

window.addEventListener('scroll', moveBoxes);

moveBoxes();

function moveBoxes(){
    const trigger = window.innerHeight / 5 * 4.1;

    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < trigger){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}