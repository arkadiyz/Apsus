
import {getRandomID} from './utils.js'
export default class Note {
    constructor(type, input, ) {
            this.id = getRandomID(),
            this.type = type, 
            this.input = input
    }
}
