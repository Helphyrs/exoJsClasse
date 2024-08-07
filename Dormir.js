class Dormir {

    name = "";
    domEnclos = "";
    domCurrent = "";
    constructor(name, domEnclos, domCurrent) {
        this.name = name;
        this.domEnclos = domEnclos;
        this.domCurrent = domCurrent;
    }

    sleep() {

        this.domCurrent.innerHTML = `Les ${this.name} sont en train de dormir`;
        switch (this.name) {
            case "dauphin":
                let bSleepDauphin = document.querySelector('.dauphin .actions .sleep'), bEatDauphin = document.querySelector('.dauphin .actions .eat'), bActDauphin = document.querySelector(".dauphin .actions .act");
                bSleepDauphin.disabled = true, bEatDauphin.disabled = true, bActDauphin.disabled = true;
                setTimeout(() => {
                    bSleepDauphin.disabled = false, bEatDauphin.disabled = false, bActDauphin.disabled = false;
                    this.domCurrent.innerHTML = `Les ${this.name} sont près à agir de nouveau !`
                }, 20000)
                break;
            case "lion":
                let bSleepLion = document.querySelector('.lion .actions .sleep'), bEatLion = document.querySelector('.lion .actions .eat'), bActLion = document.querySelector(".lion .actions .act");
                bSleepLion.disabled = true, bEatLion.disabled = true, bActLion.disabled = true;
                setTimeout(() => {
                    bSleepLion.disabled = false, bEatLion.disabled = false, bActLion.disabled = false;
                    this.domCurrent.innerHTML = `Les ${this.name} sont près à agir de nouveau !`
                }, 20000)
                break;
            case "panda":
                let bSleepPanda = document.querySelector('.panda .actions .sleep'), bEatPanda = document.querySelector('.panda .actions .eat'), bActPanda = document.querySelector(".panda .actions .act");
                bSleepPanda.disabled = true, bEatPanda.disabled = true, bActPanda.disabled = true;
                setTimeout(() => {
                    bSleepPanda.disabled = false, bEatPanda.disabled = false, bActPanda.disabled = false;
                    this.domCurrent.innerHTML = `Les ${this.name} sont près à agir de nouveau !`
                }, 20000)
                break;
        }
    }

}
export default Dormir;