import { UiStore } from './uiStore'

export interface StoreProps {  // TODO: Making it optional is bad i guess..
    uiStore?: UiStore
}

// Must be the same as listed StoreProps props. Cannot be initalized as it is not
export const injectClause = ['uiStore']