var wrap = document.getElementsByClassName("wrapper")[0];

let dragonHealth = 10;
let userHealth = 5;

//this wile loop runs wile both are alive
while(dragonHealth > 0 && userHealth > 0){
    var damage = window.prompt("Enter the number of hits you are going to attempt to hit the dragon with?");

    //random damage generator
    randDamage = Math.floor(Math.random() * damage) + 1;
    if(randDamage > 5){
        dragonHealth = dragonHealth - 1;
    }
    else{
        dragonHealth = dragonHealth - randDamage;
    }
    //if dragon dies
    if(dragonHealth > 0){
        dragRandDamage = Math.floor(Math.random() * 5) + 1;
        userHealth = userHealth - dragRandDamage;
    }

    else{
        wrap.innerHTML = "User Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }
    //if user dies
    if(userHealth <= 0){
        wrap.innerHTML = "Dragon Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }


}





