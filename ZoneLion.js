import Action from "./Action.js"
import Dormir from "./Dormir.js";
import Manger from "./Manger.js";

class ZoneLion {

  name = "lion";
  domLionCurrent = document.querySelector('.lion .current')
  domLionEnclos = document.querySelector('.lion .enclos')
  action = {};
  sleep = {};
  eat = {};

  constructor() {
    this.action = new Action(this.name, this.domLionEnclos, this.domLionCurrent);
    this.sleep = new Dormir(this.name, this.domLionEnclos, this.domLionCurrent);
    this.eat = new Manger(this.name, this.domLionEnclos, this.domLionCurrent);
  }

  showAction() {
    this.action.activity();
  }

  showSleep() {
    this.sleep.sleep();
  }

  showEat() {
    this.eat.eat();
    setTimeout(() => { this.showSleep() }, 5000);
  }

}

export default ZoneLion;