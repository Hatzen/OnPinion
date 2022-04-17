import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck, faAdd, faCaretUp, faCaretDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const initIcons = (): void => {
    library.add(faUserCheck, faAdd, faCaretUp, faCaretDown, faArrowLeft)
}