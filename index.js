import Zoo from "./Zoo.js"


let domDauphin = document.querySelector(".dauphin"), domLion = document.querySelector(".lion"), domPanda = document.querySelector(".panda");

let bActionsDauphin = document.querySelectorAll('.dauphin .actions button');
let bActionsLion = document.querySelectorAll('.lion .actions button');
let bActionsPanda = document.querySelectorAll('.panda .actions button');


const theZoo = new Zoo(domDauphin, domLion, domPanda)

document.addEventListener("DOMContentLoaded", () => {

    bActionsDauphin[0].addEventListener('click', () => theZoo.zDauphin.showEat());
    bActionsDauphin[1].addEventListener('click', () => theZoo.zDauphin.showSleep());
    bActionsDauphin[2].addEventListener('click', () => theZoo.zDauphin.showAction());


    bActionsLion[0].addEventListener('click', () => theZoo.zLion.showEat());
    bActionsLion[1].addEventListener('click', () => theZoo.zLion.showSleep());
    bActionsLion[2].addEventListener('click', () => theZoo.zLion.showAction());

    bActionsPanda[0].addEventListener('click', () => theZoo.zPanda.showEat());
    bActionsPanda[1].addEventListener('click', () => theZoo.zPanda.showSleep());
    bActionsPanda[2].addEventListener('click', () => theZoo.zPanda.showAction());

});
