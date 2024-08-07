import Action from "./Action.js"
import Dormir from "./Dormir.js";
import Manger from "./Manger.js";

class ZoneDauphin {

  name = "dauphin";
  domDauphinCurrent = document.querySelector('.dauphin .current');
  domDauphinEnclos = document.querySelector('.dauphin .enclos');
  action = {};
  sleep = {};
  eat = {};

  constructor() {
    this.action = new Action(this.name, this.domDauphinEnclos, this.domDauphinCurrent);
    this.sleep = new Dormir(this.name, this.domDauphinEnclos, this.domDauphinCurrent);
    this.eat = new Manger(this.name, this.domDauphinEnclos, this.domDauphinCurrent);
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

export default ZoneDauphin;