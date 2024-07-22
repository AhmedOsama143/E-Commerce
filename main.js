const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// To choose any product whose details you want to know
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img"); 

for (var i = 0; i < smallimg.length; i++) {

    smallimg[i].onclick = function(){
    MainImg.src = this.src;
}  
    smallimg[i].onclick = function(){
    MainImg.src = this.src;
}
        smallimg[i].onclick = function(){
    MainImg.src = this.src;
}  
    smallimg[i].onclick = function(){
    MainImg.src = this.src;
    }

}

// When you click on any product, it will transfer to sproduct
function sproduct(){
    window.location.href = 'sproduct.html';
}