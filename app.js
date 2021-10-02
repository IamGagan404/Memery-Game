// grab
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span')
let playerLives = 6;

// link text
playerLivesCount.textContent = playerLives;

//generate data
const getData = () => [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },

    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

//randomzie
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    // console.log(cardData)
    return cardData;
}
// card generator

const cardGenerator = () => {
    const cardData = randomize();
    // console.log(cardData)
    // genearot html
    // const cards = document.querySelectorAll(".card") 
    cardData.forEach((item) =>{
        // console.log(item)
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //ATTACH INFO TO CARDS
        face.src = item.imgSrc
        // cards[index].setAttribute('name', item.name);
        card.setAttribute("name",item.name)


        // ATTACH CARD TO SECTION
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e)=>{
            // console.log('i am clickked')
            card.classList.toggle("toggleCard");
            checkCards(e)
        });

    });
};


//checkcard
const checkCards = (e)=>{
    console.log(e)
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
    

    //logic
    if (flippedCards.length == 2){
        if (flippedCards[0].getAttribute("name")=== flippedCards[1].getAttribute("name")){
            console.log("matched")
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped")
                card.style.pointerEvents = "none";
            })


        }else{
            console.log('wrong')
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"),1000);
            })
            if(playerLives == 0){
                restart("oops try again");
            }else{    
            playerLives--;
            playerLivesCount.textContent  = playerLives;
            }
            
        }
    //run check win
    if(toggleCard.length === 16){
        restart("you win")
    }
    }

    


}

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
        //random
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src= itme.imgSrc;
        cards[index].setAttribute["name",item.name];
        section.style.pointerEvents = "all";
    } ,1000);
    });
    playerLives == 6
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);

};

cardGenerator()


