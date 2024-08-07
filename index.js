import Zoo from "./Zoo.js"


let domDauphin = document.querySelector(".dauphin"), domLion = document.querySelector(".lion"), domPanda = document.querySelector(".panda");

let bSleepDauphin = document.querySelector('.dauphin .actions .sleep'), bEatDauphin = document.querySelector('.dauphin .actions .eat'), bActDauphin = document.querySelector(".dauphin .actions .act");
let bSleepLion = document.querySelector('.lion .actions .sleep'), bEatLion = document.querySelector('.lion .actions .eat'), bActLion = document.querySelector(".lion .actions .act");
let bSleepPanda = document.querySelector('.panda .actions .sleep'), bEatPanda = document.querySelector('.panda .actions .eat'), bActPanda = document.querySelector(".panda .actions .act");


const theZoo = new Zoo(domDauphin, domLion, domPanda)

document.addEventListener("DOMContentLoaded", () => {

    bSleepDauphin.addEventListener('click', () => theZoo.zDauphin.showSleep());
    bEatDauphin.addEventListener('click', () => theZoo.zDauphin.showEat());
    bActDauphin.addEventListener('click', () => theZoo.zDauphin.showAction());


    bSleepLion.addEventListener('click', () => theZoo.zLion.showSleep());
    bEatLion.addEventListener('click', () => theZoo.zLion.showEat());
    bActLion.addEventListener('click', () => theZoo.zLion.showAction());

    bSleepPanda.addEventListener('click', () => theZoo.zPanda.showSleep());
    bEatPanda.addEventListener('click', () => theZoo.zPanda.showEat());
    bActPanda.addEventListener('click', () => theZoo.zPanda.showAction());

});
