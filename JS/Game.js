var Scenery = document.getElementById("GScreen");
var x = Scenery.style.backgroundPositionX;
var y = Scenery.style.backgroundPositionY;
var speed = 10;
Scenery.style.backgroundPositionY = "-200px";
Scenery.style.backgroundPositionX = "120px";
console.log(Scenery.style.backgroundPosition);

document.onkeydown = Player;
function Player(e)
{
    if(e.keyCode == 87)
    {
        y = parseInt(Scenery.style.backgroundPositionY);
        y += speed;
        Scenery.style.backgroundPositionY = y + "px";
    }
    if(e.keyCode == 83)
    {
        y = parseInt(Scenery.style.backgroundPositionY);
        y -= speed;
        Scenery.style.backgroundPositionY = y + "px";
    }
    if(e.keyCode == 65)
    {
        x = parseInt(Scenery.style.backgroundPositionX);
        x += speed;
        Scenery.style.backgroundPositionX = x + "px";
    }
    if(e.keyCode == 68)
    {
        x = parseInt(Scenery.style.backgroundPositionX);
        x -= speed;
        Scenery.style.backgroundPositionX = x + "px";
    }

}

function OnRenderFrame()
{
    Player();
}

setInterval(OnRenderFrame,1000);