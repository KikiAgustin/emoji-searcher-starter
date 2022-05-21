import style from './Navbar.module.css'

import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return (
        <nav className={style.nav} >
            <img style={{ marginRight: 8 }} className={style.navIcon} src={emojiIcon} alt="emoji icon" />
            <img style={{ marginTop: 3 }} className={style.navIcon} src={searchIcon} alt="search icon" />
            <span className={style.navTitle} >er</span>
        </nav>
    )
}

export default Navbar