import { makeAutoObservable } from 'mobx'

export class UiStore {
    
    constructor() {
        makeAutoObservable(this)
    }
}

export default new UiStore()