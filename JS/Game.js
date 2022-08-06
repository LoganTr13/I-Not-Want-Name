var Scenery = document.getElementById("GScreen");
var x = Scenery.style.backgroundPositionX;
var y = Scenery.style.backgroundPositionY;


document.onkeydown = Player;
function Player(e)
{
    if(e.Code = "KeyW")
    {

        x += 
        Scenery.style.backgroundPositionX = toString(x) + "px";
    }
    
}

function OnRenderFrame()
{
    Player();
}

setInterval(OnRenderFrame,1000);