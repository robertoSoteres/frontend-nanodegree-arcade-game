var Gems = function(){
    //Gem location
    var x = Math.floor(Math.random() * - 250);
    var y = Y_POSITION[Math.floor(Math.random() * 3)];
    this.x = x;
    this.y = y;
    //Gem speed
    this.speed = 50 + Math.floor(Math.random() * 150);
    //Gem image
    var z = Math.floor(Math.random() * 3);
    this.sprite = GEM_LIST[z];
};

Gems.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }
    
    // Control the collision of the gem with the player
    if (player.x < this.x + 75 && player.x + 65 > this.x && player.y < this.y + 50 && 70 + player.y > this.y) {
        player.score += 50;
        this.x = 1;
        y = Y_POSITION[Math.floor(Math.random() * 3)];
        this.y = y;
    }
};
// Draw the gems on the screen
Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Instantiate the objects.
var allGems =[]; 
for(var i = 0; i<TOTAL_GEMS; i++){
    var gem = new Gems();
    // Place all gems objects in an array called allGems
    allGems.push(gem);
}