const deck = new Array();
let winner=false;
let Ace = 14
let King = 13
let Queen = 12
let Jack = 11
let p1= []
let p2= []
let score1
let score2
let count = 0
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, Ace, Jack, King, Queen];
 
//card images from 'http://acbl.mybigcommerce.com/52-playing-cards/'//

for(i=0;i<suits.length;i++){
    for(j=0;j<values.length;j++){
        let card={}
        card.value=values[j]
        card.suit=suits[i]
        deck.push(card)
    }
}






function play(){
    let num=deck.length/2
     for(i=0;i<num;i++){
         p1.push(deck.splice(Math.floor((Math.random() * deck.length)),1))
     }
     for(j=0;j<num;j++){
         p2.push(deck.splice(Math.floor((Math.random() * deck.length)),1))
     }
     score1=p1.length
     score2=p2.length
     
}



function compare(){
    play()
    if(p1.length===0 || p2.length===0){
        winner=true;
    }else{
    let v1=p1[Math.floor((Math.random() * p1.length))][0]
    let v2=p2[Math.floor((Math.random() * p2.length))][0]
    console.log("player 1:"+v1.value+" and player 2:"+v2.value)
    if(v1.value>v2.value){
        score1+=1
        score2-=1
        p1.push(p2.pop())
        console.log('p1 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(v1.value<v2.value){
        score2+=1
        score1-=1
        p2.push(p1.pop())
        console.log('p2 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(v1.value===v2.value){
        console.log('its a tie! prepare for war!')
        war()
    }  
} 
}

function war(){
    play()
    let w1=p1[Math.floor((Math.random() * p1.length))][0]
    let w2=p2[Math.floor((Math.random() * p2.length))][0]
    console.log("player 1:"+w1.value+" and player 2:"+w2.value)
    if((p1.length-4)<0){
        console.log('p2 wins!')
    }
    else if((p2.length-4)<0){
        console.log('p1 wins!')
    }
    else if(w1.value>w2.value){
        score1+=4
        score2-=4
        for(i=0;i<4;i++){
            p1.push(p2.pop())
        }
        console.log('p1 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(w1.value<w2.value){
        score2+=4
        score1-=4
        for(i=0;i<4;i++){
            p2.push(p1.pop())
        }
        console.log('p2 wins. p1 score: '+score1+ ' p2 score: '+score2)
    }
    else if(w1.value===w2.value){
        console.log('its a tie! prepare for war!')
        war()
    } 
}

