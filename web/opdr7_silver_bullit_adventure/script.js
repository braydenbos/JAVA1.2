const MyTitle = document.getElementById('mytitle');
const MyImage = document.getElementById('myimage');
const MyInput = document.getElementById('myinput');

let directionButtons = {
    "noord": document.getElementById('KnopNoord'),
    "oost": document.getElementById('KnopOost'),
    "zuid": document.getElementById('KnopZuid'),
    "west": document.getElementById('KnopWest')
}

let current_index = 0;

let lokaties =//Array
[
    {//0 =object
        "titel":"plaats 0",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },
    {//1 =object
        "titel":"plaats 1",
        "image":"img/1.jpg",
        "directions": {
            "noord": 0,
            "oost": 5,
            "zuid": 4,
            "west": 2
        }
    },
    {//2 =object
        "titel":"plaats 2",
        "image":"img/2.jpg",
        "directions": {
            "oost": 1,
            "zuid": 3
        }
    },
    {//3 =object
        "titel":"plaats 3",
        "image":"img/3.jpg",
        "directions": {
            "noord": 2
        }
    },
    {//4 =object
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "directions": {
            "noord": 1
        }
    },
    {//5 =object
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "directions": {
            "noord": 10,
            "oost": 6,
            "west": 1
        }
    },
    {//6 =object
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "directions": {
            "oost": 7,
            "zuid": 11,
            "west": 5
        }
    },
    {//7 =object
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "directions": {
            "noord": 9,
            "zuid": 8,
            "west": 6
        }
    },
    {//8 =object
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "directions": {
            "noord": 7
        }
    },
    {//9 =object
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "directions": {
            "zuid": 7,
            "west": 10
        }
    },
    {//10 =object
        "titel":"plaats 10",
        "image":"img/10.jpg",
        "directions": {
            "oost": 9,
            "zuid": 5
        }
    },
    {//11 =object
        "titel":"plaats 11",
        "image":"img/11.jpg",
        "directions": {
            "noord": 6
        }
    }
];

function show(index){
    MyTitle.innerHTML = lokaties[index].titel;
    MyImage.src = lokaties[index].image;
    current_index = index;
    update_directions();
};

function update_directions(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = 'hidden';
    };
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    };
};

function getinput(){
    show(MyInput.value);
    MyInput.value = "";
    MyInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}
show(0)