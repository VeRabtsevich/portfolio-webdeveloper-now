$(window).on('load',function(){
    //video.js -video backgraund
    $('#header').vide('./video/cover', {
        bgColor: "#728b7f"
    })
})
let text= "ФРИЛАНСЕР,НАЧИНАЮЩИЙ ВЕБ-РАЗРАБОТЧИК,СОЗДАНИЕ САЙТОВ...   ";
let i=0;
let speed = 100;
function type(){
    if (i < text.length){
        document.querySelector(".header-subtitle").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);         
    }
}
type();
// ------Slaider-----
const back=document.querySelector("#back");
const next=document.querySelector("#next");

const photos = ["diploma16729960.png",
 "verabtsevich-html.png",
 "verabtsevich-js.png",
];

let item=0;

next.addEventListener('click',()=>{
    item++;
if(item > photos.length -1) {
    item=0;
}
    document.querySelector("#pictures").src=photos[item];
});
// back.addEventListener('click',()=>{
//     item--;
//     if(item< 0){
//     item= photos.length-1;

//     }
//     document.querySelector("#pictures").src=photos[item];
// });