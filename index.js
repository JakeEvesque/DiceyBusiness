class Die {
    constructor(){
        this.div = document.createElement("div");
        this.div.classList.add("die");
        this.div.style.left = "200px";
        this.div.style.top = "200px";
        this.div.innerHTML = this.value;
        this.div.addEventListener("click", () => {
            this.roll();
        });
        this.div.addEventListener("dblclick", () => {
            console.log("Hello: " + dice.length);
            for(var i = dice.length-1; i >= 0; i--){
                if (dice[i] == this){
                    console.log("Popping: " + i);
                    dice.splice(i,1);
                    diceDiv.removeChild(this.div);
                    break;
                }
            }            
        });

        this.roll();
        diceDiv.appendChild(this.div);
        
    }

    roll() {
        this.value = randomValue(1,6);        
        this.div.innerHTML = this.value;
        return;
    }
}
let dice = [];
let diceDiv = document.getElementById("diceDiv");
let addDie = document.getElementById("addDie");
let rollDice = document.getElementById("rollDice");
let sumDice = document.getElementById("sumDice");

addDie.addEventListener("click", function () {
    let die = new Die();

    dice.push(die);
});
rollDice.addEventListener("click", function () {
    for(var i = 0; i < dice.length; i++){
        dice[i].roll();
    }
});

sumDice.addEventListener("click", function() {
    let sum = 0;
    for(var i = 0; i < dice.length; i++){
        sum += parseInt(dice[i].div.innerHTML);
    }
    alert(sum);
});

function randomValue(min, max){
    return Math.floor(Math.random() * ((max + 1)-min)) + min; 
}