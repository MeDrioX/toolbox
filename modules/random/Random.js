/**
 * @author MeDrioX <medriox@gmail.com>
 */

'use script'

module.exports = class Random {

    constructor(options) {
        this.options = options ? null : [];
    }

    getNumber(min, max){
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

}