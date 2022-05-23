import PropTypes from 'prop-types'

import style from './EmojiBox.module.css'

const EmojiBox = ({ symbol, title }) => {
    return (
        <div className={style.emojiBox} >
            <p
                className={style.emoji}
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}
            />
            <p className={style.emojiTitle} >{title}</p>
        </div>
    )
}

EmojiBox.propTypes = {
    symbol: PropTypes.string,
    title: PropTypes.string
}

export default EmojiBox