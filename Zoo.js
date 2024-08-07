import ZoneDauphin from "./ZoneDauphin.js";
import ZoneLion from "./ZoneLion.js";
import ZonePanda from "./ZonePanda.js";
class Zoo {


    domDauphin = "";
    domLion = "";
    domPanda = "";

    zDauphin = {};
    zLion = {};
    zPanda = {}

    constructor(domDauphin, domLion, domPanda) {

        this.domDauphin = domDauphin;
        this.domLion = domLion;
        this.domPanda = domPanda;

        this.zDauphin = new ZoneDauphin();
        this.zLion = new ZoneLion();
        this.zPanda = new ZonePanda();

    }


}






export default Zoo