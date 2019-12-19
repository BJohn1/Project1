const deck = new Array();
const Ace = 14
const King = 13
const Queen = 12
const Jack = 11
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, Ace, Jack, King, Queen]
const images=["./media/JPEG/Clubs2.jpg",
    "./media/JPEG/Clubs3.jpg",
    "./media/JPEG/Clubs4.jpg",
    "./media/JPEG/Clubs5.jpg",
    "./media/JPEG/Clubs6.jpg",
    "./media/JPEG/Clubs7.jpg",
    "./media/JPEG/Clubs8.jpg",
    "./media/JPEG/Clubs9.jpg",
    "./media/JPEG/Clubs10.jpg",
    "./media/JPEG/ClubsAce.jpg",
    "./media/JPEG/ClubsJack.jpg",
    "./media/JPEG/ClubsKing.jpg",
    "./media/JPEG/ClubsQueen.jpg",
    "./media/JPEG/Diamonds2.jpg",
    "./media/JPEG/Diamonds3.jpg",
    "./media/JPEG/Diamonds4.jpg",
    "./media/JPEG/Diamonds5.jpg",
    "./media/JPEG/Diamonds6.jpg",
    "./media/JPEG/Diamonds7.jpg",
    "./media/JPEG/Diamonds8.jpg",
    "./media/JPEG/Diamonds9.jpg",
    "./media/JPEG/Diamonds10.jpg",
    "./media/JPEG/DiamondsAce.jpg",
    "./media/JPEG/DiamondsJack.jpg",
    "./media/JPEG/DiamondsKing.jpg",
    "./media/JPEG/DiamondsQueen.jpg",
    "./media/JPEG/Hearts2.jpg",
    "./media/JPEG/Hearts3.jpg",
    "./media/JPEG/Hearts4.jpg",
    "./media/JPEG/Hearts5.jpg",
    "./media/JPEG/Hearts6.jpg",
    "./media/JPEG/Hearts7.jpg",
    "./media/JPEG/Hearts8.jpg",
    "./media/JPEG/Hearts9.jpg",
    "./media/JPEG/Hearts10.jpg",
    "./media/JPEG/HeartsAce.jpg",
    "./media/JPEG/HeartsJack.jpg",
    "./media/JPEG/HeartsKing.jpg",
    "./media/JPEG/HeartsQueen.jpg",
    "./media/JPEG/Spades2.jpg",
    "./media/JPEG/Spades3.jpg",
    "./media/JPEG/Spades4.jpg",
    "./media/JPEG/Spades5.jpg",
    "./media/JPEG/Spades6.jpg",
    "./media/JPEG/Spades7.jpg",
    "./media/JPEG/Spades8.jpg",
    "./media/JPEG/Spades9.jpg",
    "./media/JPEG/Spades10.jpg",
    "./media/JPEG/SpadesAce.jpg",
    "./media/JPEG/SpadesJack.jpg",
    "./media/JPEG/SpadesKing.jpg",
    "./media/JPEG/SpadesQueen.jpg"]
let winner
let p1
let p2
let score1
let score2
let stache1
let stache2
let count = 0

//card images from 'http://acbl.mybigcommerce.com/52-playing-cards/'//
function restart(){
    location.reload()
}

function renderScore(){
    document.querySelector('.score1').innerText="Deck Size:"+score1
    document.querySelector('.score2').innerText="Deck Size:"+score2
}

function render(x,y){
    document.querySelector('#card1').setAttribute('src',x)
    setTimeout(function() {
    document.querySelector('#card2').setAttribute('src',y)
    }, 200);
    renderScore()
}

function init(){
    winner=false
    p1=[]
    p2=[]
    stache1=[]
    stache2=[]
    createDeck()
    shuffle()
    render("./media/JPEG/zmiscellaneous card image/blue_back.jpg","./media/JPEG/zmiscellaneous card image/Red_back.jpg")
}

init()

function createDeck(){
for(i=0;i<suits.length;i++){
    for(j=0;j<values.length;j++){
        let card={}
        card.value=values[j]
        card.suit=suits[i]
        deck.push(card)
    }
}
for(k=0;k<52;k++){
    deck[k].image=images[k]
} 
}


function shuffle(){
    let num=deck.length/2
     for(i=0;i<num;i++){
         p1.push(deck.splice(Math.floor((Math.random() * deck.length)),1)[0])
     }
     for(j=0;j<num;j++){
         p2.push(deck.splice(Math.floor((Math.random() * deck.length)),1)[0])
     }
     score1=p1.length
     score2=p2.length
     
}



function compare(){
    //shuffle()
    if(p1.length===0 || p2.length===0){
        winner=true;
        if(p1.length===0){
            alert('PLAYER 1 WINS')
        }
        else alert('COMPUTER WINS')
    }else{
    let v1=p1[p1.length-1]
    let v2=p2[p2.length-1]
    console.log("player 1:"+v1.value+" and player 2:"+v2.value)
    if(v1.value>v2.value){
        score1+=1
        score2-=1
        render(v1.image,v2.image)
        p1.unshift(p2.pop())
        p1.unshift(p1.pop())
        console.log('p1 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(v1.value<v2.value){
        score2+=1
        score1-=1
        render(v1.image,v2.image)
        p2.unshift(p1.pop())
        p2.unshift(p2.pop())
        console.log('p2 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(v1.value===v2.value){
        score2+=0
        score1-=0
        render(v1.image,v2.image)
        console.log('P1 card:'+v1.value+' | P2 Score'+v2.value+'---we have a tie! prepare for war!')
        alert('P1 card:'+v1.value+' | P2 Score'+v2.value+'---its a tie! PREPARE FOR WAR!...WAIT FOR IT...')  
        if((p1.length-4)<0){
            winner=true;
            console.log('not enough cards p1. p2 wins!')
            alert('not enough cards p1. p2 wins!')
        }
        else if((p2.length-4)<0){
            winner=true;
            console.log('not enough cards p2. p1 wins!')
            alert('not enough cards p2. p1 wins!')
        }
        else{
            render(v1.image,v2.image)
        }
        setTimeout(function() {
            war(1)
        }, 1000);
    }  
} 
}

function war(z){
    /* shuffle() */
    let w1=p1[p1.length-(4*z)]
    let w2=p2[p2.length-(4*z)]
    /* render(w1.image,w2.image) */
    console.log("player 1:"+w1.value+" and player 2:"+w2.value)
    if((p1.length-4)<0){
        winner=true;
        console.log('not enough cards p1. p2 wins!')
        alert('P1 Ran out of Cards! WINNER: P2')
    }
    else if((p2.length-4)<0){
        winner=true;
        console.log('not enough cards p2. p1 wins!')
        alert('P2 Ran out of Cards! WINNER: P1')
    }
    else if(w1.value>w2.value){
        score1+=(4*z)
        score2-=(4*z)
        for(i=0;i<(4*z);i++){
            p1.unshift(p2.pop())
            p1.unshift(p1.pop())
        }
        //render(w1.image,w2.image)
        console.log('p1 wins. p1 score: '+score1+ ' p2 score: '+score2)
        alert('P1 Card:'+w1.value+' | P2 Card:'+w2.value+'---P1 won the war. ')
    }
    else if(w1.value<w2.value){
        score2+=(4*z)
        score1-=(4*z)
        for(i=0;i<(4*z);i++){
            p2.unshift(p1.pop())
            p2.unshift(p2.pop())
        }
        //render(w1.image,w2.image)
        console.log('p2 wins. p1 score: '+score1+ ' p2 score: '+score2)
        alert('P2 Card:'+w2.value+' | P1 Card:'+w1.value+'---P2 won the war. ')
    }
    else if(w1.value===w2.value){
        //render(w1.image,w2.image)
        console.log('another tie! prepare for war!')
        alert('P2 Card:'+w2.value+' | P1 Card:'+w1.value+'---ANOTHER WAR') 
        war((z+1))
    } 
    render(w1.image,w2.image)
}

