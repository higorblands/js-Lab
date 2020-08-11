// Names input
var stName = prompt('Whats your name ?');
var ndName = prompt('Whats the name of you crush ?');

// logic to generate a random number beetween 1 and 100.
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;

// output

if(loveScore > 70){
    console.log(stName +' you matched ' +loveScore+ '% with ' + ndName + ' this is a hot love.' );
}
if(loveScore < 70 && loveScore > 50){
    console.log(stName + 'you matched ' +loveScore+ '% with ' + ndName + ' this is normal love.');
}
if(loveScore <= 49){
    console.log(stName + 'you matched ' +loveScore+ '% with ' + ndName + ' this love needs more fire.');
}
