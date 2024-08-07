import Action from "./Action.js"
import Dormir from "./Dormir.js";
import Manger from "./Manger.js";

class ZonePanda {

  name = "panda";
  domPandaCurrent = document.querySelector('.panda .current');
  domPandaEnclos = document.querySelector('.panda .enclos');
  action = {};
  sleep = {};
  eat = {};

  constructor() {
    this.action = new Action(this.name, this.domPandaEnclos, this.domPandaCurrent);
    this.sleep = new Dormir(this.name, this.domPandaEnclos, this.domPandaCurrent);
    this.eat = new Manger(this.name, this.domPandaEnclos, this.domPandaCurrent);
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

export default ZonePanda;