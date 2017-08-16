// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var z = Math.floor(Math.random() * 5);
    this.sprite = playerList[z];

    //Setting the Enemy initial location (you need to implement)
    var x = Math.floor(Math.random() * - 250);
    var y = yPosition[Math.floor(Math.random() * 3)];
    this.x = x;
    this.y = y;

    //Setting the Enemy speed (you need to implement)
    this.speed = 100 + Math.floor(Math.random() * 150);

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }

    // Control the collision of the bug with the player
    for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + 75 && player.x + 65 > allEnemies[i].x && player.y < allEnemies[i].y + 50 && 70 + player.y > allEnemies[i].y) {
            player.reset();
        };
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var allEnemies =[]; 
for(var i = 0; i<totalEnemies; i++){
    var enemy = new Enemy();
    // Place all enemy objects in an array called allGems
    allEnemies.push(enemy);
}