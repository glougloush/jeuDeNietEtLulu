let cats = [
    {
        name: "Niet",
        mood: "Mignon",
        energy: 100,
        img: "cat1.jpg",
        messages: {
            feed: "Niet dévore ses croquettes mouillées avec enthousiasme! J'espère qu'il ne va pas vomir....",
            pet: "Niet ronronne très fort... Mais il va bientôt s'enfuir, et tu le sais...",
            play: "Niet joue avec toi! Pour une fois qu'il fait autre chose que dormir ou manger...",
            sleep: "Niet fait une grosse sieste et rêve de croquettes mouillées!"
        }
    },
    {
        name: "Lulu",
        mood: "Sorcière",
        energy: 100,
        img: "cat2.jpg",
        messages: {
            feed: "Lulu dévore ses croquettes mouillées, puis celles de Niet!",
            pet: "Lulu te fais un gros calin sur la couverture chauffante!",
            play: "Lulu te ramène un élastique!",
            sleep: "Lulu dort profondément sur tes jambes!"
        }
    },
];

let chat = 0;
let cat = cats[chat];

function updateCatStatus(){
    document.getElementById("cat-name").textContent = cat.name;
    document.getElementById("cat-mood").textContent = "Mood: " + cat.mood;
    document.getElementById("cat-Energy").textContent = "Energie: " + cat.energy + "%";
    document.getElementById("cat-img").src = cat.img;
}

function feedCat(){
    if(cat.energy < 100){
        cat.energy = Math.max(cat.energy + 20, 100);
        cat.mood = "A bien mangé";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.feed;
       
    } else {
        document.getElementById("message").textContent = cat.name + " a trop mangé!";
    }
}
 function petCat(){
    cat.mood = "Ronrons";
    updateCatStatus();
    document.getElementById("message").textContent = cat.messages.pet;
 }

function playWithCat(){
    if(cat.energy > 20){
        cat.energy -= 20;
        cat.mood = "Joueur";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.play;
        
    } else {
        document.getElementById("message").textContent = cat.name + " a la flemme de jouer.";
    }
}
function sleepCat(){
        cat.energy = 100;
        cat.mood = "Flemmard";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.sleep;
        
    }

function changeCat() {
        chat = (chat + 1) % cats.length;
        cat = cats[chat];
    
        updateCatStatus();

        document.getElementById("message").textContent = "C'est l'heure d'embêter " + cat.name + " !";
        cat.img = `cat${chat + 1}.jpg`;
    }