var scores,value,activeplayer,dice,gameplaying=true,p_dice;
//Initialization

function init(){
    scores=[0,0],value=0,activeplayer=0,dice,p_dice=1,gameplaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

init();
document.querySelector('.btn--new').addEventListener('click',init);

function nextplayer(){
    activeplayer===0?activeplayer=1:activeplayer=0;
   value=0;
   p_dice=1;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display='none';
    

}

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gameplaying){
    //1.Random number
    //dice=Math.floor((Math.random()*6)+1) ;
    dice=6;
    

    //2.Display the result
    var dicedom=document.querySelector('.dice');
    dicedom.style.display='block';
    dicedom.src='dice-'+dice+ '.png';  

    //3.Update the round  score If the rolled number was not 1
    if(dice==1||p_dice===dice)
    {
        value=0;
        document.querySelector('#current--'+activeplayer).textContent=value;
        nextplayer();
    }
    else 
        {
            value+=dice;
        document.querySelector('#current--'+activeplayer).textContent=value;
        }
}
if(dice==6)
     p_dice=6;
}) ;

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gameplaying){

    //update global score
    scores[activeplayer]+=value;
    document.querySelector('#score--'+activeplayer).textContent=scores[activeplayer];
    
    if(scores[activeplayer]>=20)
    {
    document.querySelector('#name--'+activeplayer).textContent="Winner!"
    document.querySelector('.player--'+activeplayer).classList.remove('player--active');
    document.querySelector('.player--'+activeplayer).classList.add('player--winner');
    document.querySelector('.dice').style.display='none';
    gameplaying=false;

    }
    nextplayer();
}
}); 


