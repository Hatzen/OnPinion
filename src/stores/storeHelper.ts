import { UiStore } from './uiStore'

export interface StoreProps {
    uiStore?: UiStore // It is optional because we use the inject functionality of Mobx and it is not defined within the props.
}

// Must be the same as listed StoreProps props. Cannot be initalized as it is not
export const injectClause = ['uiStore']