import { player } from "./player.js";

export class LocalStorageInterface {
    resetGame(){
        window.localStorage.clear();
    }

    getPlayer(id){
        return this.getFromStorage("Player_" + id);
    }

    getActivePlayers(){
        var activePlayersArr = []
        for(let i = 0; i < window.localStorage.length; i++){
            if (window.localStorage.key(i).substring(0,7) == 'Player_') {
                var _ = player.from(this.getFromStorage(window.localStorage.key(i)));
                activePlayersArr.push(_);
            }
        }

        return activePlayersArr;
    }

    updatePlayer(player){
        this.setInStorage("Player_" + player.id, JSON.stringify(player));
    }
    // Generic Methods that are shared from all "Friendly Named" interfaces
    getFromStorage(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    setInStorage(key, object){
        window.localStorage.setItem(key, object);
    }
}

Storage.prototype.getArray = function(arrayName) {
    var thisArray = [];
    var fetchArrayObject = this.getItem(arrayName);
    if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
    }
    return thisArray;
}
    
Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
    var existingArray = this.getArray(arrayName);
    existingArray.push(arrayItem);
    this.setItem(arrayName,JSON.stringify(existingArray));
}
    
Storage.prototype.popArrayItem = function(arrayName) {
    var arrayItem = {};
    var existingArray = this.getArray(arrayName);
    if (existingArray.length > 0) {
        arrayItem = existingArray.pop();
        this.setItem(arrayName,JSON.stringify(existingArray));
    }
    return arrayItem;
}
    
Storage.prototype.shiftArrayItem = function(arrayName) {
    var arrayItem = {};
    var existingArray = this.getArray(arrayName);
    if (existingArray.length > 0) {
        arrayItem = existingArray.shift();
        this.setItem(arrayName,JSON.stringify(existingArray));
    }
    return arrayItem;
}