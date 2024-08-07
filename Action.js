class Action {

  name = "";
  domEnclos = "";
  domCurrent = "";

  constructor(name, domEnclos, domCurrent) {
    this.name = name;
    this.domEnclos = domEnclos;
    this.domCurrent = domCurrent;
  }

  activity() {
    let action = this.action
    let random = Math.floor(Math.random() * 3);

    switch (this.name) {
      case "dauphin":
        switch (random) {
          case 0:
            this.domCurrent.innerHTML = "Le dauphin joue.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 1:
            this.domCurrent.innerHTML = "Le dauphin siffle.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 2:
            this.domCurrent.innerHTML = "Le dauphin nage.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
        }
        break;

      case "lion":
        switch (random) {
          case 0:
            this.domCurrent.innerHTML = "Le lion rugit.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 1:
            this.domCurrent.innerHTML = "Le lion chasse.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 2:
            this.domCurrent.innerHTML = "Le lion cours.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
        }
        break;

      case "panda":
        switch (random) {
          case 0:
            this.domCurrent.innerHTML = "Le panda grimpe.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 1:
            this.domCurrent.innerHTML = "Le panda roule.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
          case 2:
            this.domCurrent.innerHTML = "Le panda cours.";
            setTimeout(() => { this.domCurrent.innerHTML = "" }, 5000);
            break;
        }
        break;
    }
    action = this.action;
    return action
  }

}

export default Action;