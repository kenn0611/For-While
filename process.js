function dragonDamage() {
    var userHealth = 5;
    var youHit = function() {
        return Math.floor(Math.random() * 2);
    };
    var damageThisRound = function() {
        return Math.floor(Math.random() * 5 + 1);
    }
    var totalDamage = 0;
    var dragonDamage = function() {
        return Math.floor(Math.random() * 2);
    }

    while (userHealth > 0) {
        var damage = youHit();
        if (damage) {
            console.log("You hit the dragon!");
            totalDamage += damageThisRound();
            console.log("Total damage dealt: " + totalDamage + "!");
            if (totalDamage >= 4) {
                console.log('You slew the dragon!');
                break;
            }
        } else {
            console.log('The dragon has dealt damage to you!');
            userHealth -= dragonDamage();
            console.log('Your health is now: ' + userHealth + '!')
        }
    }

}
