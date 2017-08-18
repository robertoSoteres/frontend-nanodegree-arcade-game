var Gems = function(){
    //Gem location
    var x = Math.floor(Math.random() * - 250);
    var y = yPosition[Math.floor(Math.random() * 3)];
    this.x = x;
    this.y = y;
    //Gem speed
    this.speed = 50 + Math.floor(Math.random() * 150);
    //Gem image
    var z = Math.floor(Math.random() * 3);
    this.sprite = gemList[z];
};

Gems.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }
    
    // Control the collision of the gem with the player
    for (var i = 0; i < allGems.length; i++) {
        if (player.x < allGems[i].x + 75 && player.x + 65 > allGems[i].x && player.y < allGems[i].y + 50 && 70 + player.y > allGems[i].y) {
            player.score += 50;
             allGems[i].x = 1;
        };
    }
};
// Draw the gems on the screen
Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Instantiate the objects.
var allGems =[]; 
for(var i = 0; i<totalGems; i++){
    var gem = new Gems();
    // Place all gems objects in an array called allGems
    allGems.push(gem);
}