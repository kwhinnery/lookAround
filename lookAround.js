function _look_around(repeat = true) 
{
    misty.MoveHeadDegrees(getRandomInt(-23, 23), getRandomInt(-35, 35), getRandomInt(-75, 75), 100);
    if (repeat) misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);
}
misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);

function gaussianRand() 
{    
    var u = v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0) return gaussianRand();
    return num;
}

function gaussianRandom(start, end) 
{
    return Math.floor(start + gaussianRand() * (end - start + 1));
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
