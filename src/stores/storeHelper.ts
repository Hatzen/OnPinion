import { UiStore } from './uiStore'

export interface StoreProps {
    uiStore?: UiStore // It is optional so we can use the inject functionality of Mobx.
}

// Must be the same as listed StoreProps props. Cannot be initalized as it is not
export const injectClause = ['uiStore']