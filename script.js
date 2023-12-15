const btns = document.querySelectorAll('button')
const list = document.querySelector('ul')

function showAnime(arr){
    list.innerHTML=''
    for (const anime of arr) {
        list.innerHTML+=`<li>
        <h1>${anime.id}
        <h1>${anime.title}</h1>
        <img src='${anime.posterURL}'/>
        </li>`
    }
}

//Animation Kino
const animeUrl='https://api.sampleapis.com/movies/animation'

function animationsInfo (){
    fetch(animeUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[0].onclick=(arr)=>{
    if (list.children.length === 0) {
        animationsInfo();
    } else {
        list.innerHTML='';
    }
    
}
//End

//Classic kino
const classicUrl='https://api.sampleapis.com/movies/classic'

function classicsInfo (){
    fetch(classicUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[1].onclick=()=>{
    if (list.children.length === 0) {
        classicsInfo();
    } else {
        list.innerHTML='';
    }
}
//End

//Comedy kino
const comedyUrl = 'https://api.sampleapis.com/movies/comedy'

function comedyInfo (){
    fetch(comedyUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[2].onclick=()=>{
    if (list.children.length === 0) {
        comedyInfo();
    } else {
        list.innerHTML='';
    }
}

//End

//Drama Kino
const dramaUrl= 'https://api.sampleapis.com/movies/drama'

function dramaInfo (){
    fetch(dramaUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[3].onclick=()=>{
    if (list.children.length === 0) {
        dramaInfo();
    } else {
        list.innerHTML='';
    }
}
//End

//Horror kino

const horrorUrl = 'https://api.sampleapis.com/movies/horror'

function horrorInfo() {
    fetch(horrorUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[4].onclick=()=>{
    if (list.children.length === 0) {
        horrorInfo();
    } else {
        list.innerHTML = ''
    }
}

//End

//Family Kino
const familyUrl = 'https://api.sampleapis.com/movies/family'

function familyInfo (){
    fetch(familyUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[5].onclick=()=>{
    if (list.children.length === 0) {
        familyInfo()
    } else {
        list.innerHTML=''
    }
}
//End

//Mystery

const mysteryUrl= 'https://api.sampleapis.com/movies/mystery'

function mysteryInfo() {
    fetch(mysteryUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[6].onclick=()=>{
    if(list.children.length === 0){
        mysteryInfo()
    } else{
        list.innerHTML=''
    }
}
//End

//Scifi-Fantasy

const westernUrl= 'https://api.sampleapis.com/movies/western'

function westernInfo(){
    fetch(westernUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showAnime(data)
    })
}

btns[7].onclick=()=>{
    if (list.children.length === 0) {
        westernInfo()
    } else {
        list.innerHTML=''
    }
}