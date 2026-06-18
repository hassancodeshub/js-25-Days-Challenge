let boxes = document.querySelectorAll('.box');
let body = document.querySelector('body');
console.log("HI")
boxes.forEach(function(box){
    let c1 = box.innerText;
    let c2 = box.getAttribute('id');
    box.addEventListener('click',function(e){
        let c3 = e.target.id;
        body.style.backgroundColor=c3;
        console.log(box.getAttribute('id'));
    });
});