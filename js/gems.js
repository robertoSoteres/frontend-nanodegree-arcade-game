var gems = function(x,y){
    //Gems speed
    this.speed = 50 + Math.floor(Math.random() * 150);
    //Gems image
    this.sprite = 'images/Gem_Orange.png';
    this.gemList = ['Gem_Blue.png', 'Gem_Green.png', 'Gem_Orange.png'];
    //Gems location
    this.x = x;
    this.y = y;
    
};

gems.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }
    
    // Control the collision of the gem with the player
    for (var i = 0; i < allGems.length; i++) {
        if (player.x < allGems[i].x + 75 && player.x + 65 > allGems[i].x && player.y < allGems[i].y + 50 && 70 + player.y > allGems[i].y) {
            player.score += 50;
            this.x = 1;
        };
    }
};
// Draw the gems on the screen
gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Instantiate the objects.
var gem1 = new gems(400, 60);
var gem2 = new gems(150, 234);
var gem3 = new gems(200, 145);
// Place all gems objects in an array called allGems
var allGems = [gem1, gem2, gem3];