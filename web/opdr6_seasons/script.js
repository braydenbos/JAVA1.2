const mytitle = document.getElementById('mytitle')
const myimg = document.getElementById('myimg')

let seasons = [
    {
        "title":"Seizoenen",
        "image":"img/seasons.jpg",
        "background":"antiquewhite"
    },
    {
        "title":"Lente",
        "image":"img/spring.jpg",
        "background":"lightgreen"
    },
    {
        "title":"Zomer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "title":"Herfst",
        "image":"img/autumn.jpg",
        "background":"orange"
    },
    {
        "title":"Winter",
        "image":"img/winter.jpg",
        "background":"lightskyblue"
    },

];

function show(index){
mytitle.innerHTML = seasons[index].title;
myimg.src = seasons[index].image;
document.body.style.backgroundColor = seasons[index].background;

};