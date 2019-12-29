import { getRandomID } from './utils.js'

export default class Todo {

    constructor(type, input) {

        this.id = getRandomID(),
            this.type = type,
            this.input = input,
            this.importance = 'importance',
            this.backgroundColor = 'orange',
            this.createdAt = new Date().toString().slice(4, 15),
            this.todos =[]
    }
}
