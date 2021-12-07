const myImage = document.getElementById("myImage")
const myText = document.getElementById("myText")

let paintings = [
"img/painting0.jpg",
"img/painting1.jpg",
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg"]

let titles = [
"De schilderijen van van Gogh",
"De rode wijngaard",
"De sterrennacht",
"Sterrennacht boven de Rhône",
"Zonnebloemen",
"Boederij in de Provence"]

function changeImage(index){
    myText.innerHTML = titles[index];
    myImage.src = paintings[index];
}
