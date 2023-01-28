export class gameScreen {
    constructor (divId){
        this.divId = divId;
    }

    hide(){
        $(this.divId).addClass("visually-hidden");
    }

    show(){
        $(this.divId).removeClass("visually-hidden");
    }
}