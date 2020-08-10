var stName = prompt('Whats your name ?');
var ndName = prompt('Whats the name of you crush ?');

var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(stName +' you matched ' +loveScore+ '% with ' + ndName + '.' );
