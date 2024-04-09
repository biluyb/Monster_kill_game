const ATTACK_GUN = 10;
const MONSTER_GUN = 14;
const STRONG_ATTACK = 20;

let maxMonsterLife = 100;
let player_life = 100;

function attack(attackMode) {
    let attackType;
    if (attackMode === "killMonster") {
        attackType = ATTACK_GUN;
    }
    else if (attackMode === 'strongKill') {
        attackType = STRONG_ATTACK;
    }
    maxStatus = attackMonster(attackType, MONSTER_GUN);
    maxMonsterLife -= maxStatus[0];
    player_life -= maxStatus[1];
    if (maxMonsterLife == 0 && player_life == 0) {
        alert('DRAW')

    }
    else if (player_life <= 0) {
        alert("YOU LOOSE")
    }
    else if (maxMonsterLife <= 0) {
        alert("YOU WIN")
    }

}

function attackTheMonster() {
    attack("killMonster");
}
function strongAttack() {
    attack('strongKill');
}

function heal() {

    playerHealthLifeBar.value += 10;
}

attackBtn.addEventListener('click', attackTheMonster);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);
