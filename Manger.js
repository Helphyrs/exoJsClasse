class Manger {

    name = "";
    domEnclos = "";
    domCurrent = "";

    constructor(name, domEnclos, domCurrent) {
        this.name = name;
        this.domEnclos = domEnclos;
        this.domCurrent = domCurrent;
    }

    eat() {
        this.domCurrent.innerHTML = `Les ${this.name} mangent.`
        switch (this.name) {
            case "dauphin":
                let bSleepDauphin = document.querySelector('.dauphin .actions .sleep'), bEatDauphin = document.querySelector('.dauphin .actions .eat'), bActDauphin = document.querySelector(".dauphin .actions .act");
                bSleepDauphin.disabled = true, bEatDauphin.disabled = true, bActDauphin.disabled = true;
                break;
            case "lion":
                let bSleepLion = document.querySelector('.lion .actions .sleep'), bEatLion = document.querySelector('.lion .actions .eat'), bActLion = document.querySelector(".lion .actions .act");
                bSleepLion.disabled = true, bEatLion.disabled = true, bActLion.disabled = true;
                break;
            case "panda":
                let bSleepPanda = document.querySelector('.panda .actions .sleep'), bEatPanda = document.querySelector('.panda .actions .eat'), bActPanda = document.querySelector(".panda .actions .act");
                bSleepPanda.disabled = true, bEatPanda.disabled = true, bActPanda.disabled = true;
                break;
        }

    }
}
export default Manger;