

let skay = document.getElementById('Skay');
let Mountain2 = document.getElementById('Top');
let mountain = document.getElementById('Mountain');
let trees = document.getElementById('Trees');
let Mountain33 = document.getElementById('Mountain33')
let Everest = document.querySelector('.Everest');
let mobile = document.getElementById('mobile');
let logo = document.querySelector('.logo');
let card = document.querySelectorAll(".card-marcket");
let home = document.querySelector('nav a');
let next = document.getElementById('next');
let Gallary = document.getElementById('move')



let clip = document.querySelectorAll('.clip');

for(let i = 0; i<clip.length; i++){

clip[i].addEventListener('mouseenter',function(e){
    clip[i].play();
})
clip[i].addEventListener('mouseout',function(e){
    clip[i].pause();
})
};





window.onscroll = function(){
let value = scrollY;


if(scrollY >= 622){
logo.style.display = 'none'
}else{
    logo.style.display = 'flex'
}

if(scrollY >= 900){
    mobile.style.top = value/3 + 'px';

    if(scrollY >= 1650){
        mobile.style.display =  'flex';
    }
} 

};
