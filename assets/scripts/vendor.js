const monsterHealthLifeBar = document.getElementById("monster-health");
const playerHealthLifeBar = document.getElementById("player-health");
const bonus = document.getElementById("bonus-life")

const attackBtn = document.getElementById("attack-btn")
const strongAttackBtn = document.getElementById("strong-attack-btn")
const healBtn = document.getElementById("heal-btn")
const logBtn = document.getElementById("log-btn")

function adjustHealthBar(maxLife){
    monsterHealthLifeBar.max=maxLife;
    monsterHealthLifeBar.value = maxLife;
    playerHealthLifeBar.max = maxLife;
    playerHealthLifeBar.value = maxLife;
}

function attackMonster(playerGun, monsterGun){
    let attacks= [playerGun,monsterGun]
    let attackResult=[];
    for (let index = 0; index < attacks.length; index++) {
         const damage = +attacks[index] * Math.random();
         attackResult.push(damage)
    }
    monsterHealthLifeBar.value = +monsterHealthLifeBar.value - attackResult[0];
    playerHealthLifeBar.value = +playerHealthLifeBar.value - attackResult[1];
    return attackResult;
}

const studGrade = document.getElementById("studGrade")
const gradeBtn = document.getElementById("grade-btn")
