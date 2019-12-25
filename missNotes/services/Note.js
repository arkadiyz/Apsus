
import {getRandomID} from './utils.js'
export default class Email {
    constructor(type, txt, ) {
            this.id = getRandomID(),
            this.type = type, 
            this.txt = txt
    }
}
