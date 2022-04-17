import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck, faAdd } from '@fortawesome/free-solid-svg-icons'

export const initIcons = (): void => {
    library.add(faUserCheck, faAdd)
}