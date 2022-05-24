import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './EmojiBox.module.css'

const EmojiBox = ({ symbol, title }) => {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setSelected(false), 600)
        return () => clearTimeout(timer)
    }, [selected])

    return (
        <div
            onClick={() => {
                navigator.clipboard.writeText(symbol)
                setSelected(true)
            }}
            className={classnames(style.emojiBox, {
                [style.selected]: selected
            })} >
            <p
                className={style.emoji}
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}
            />
            <p className={style.emojiTitle} >
                {selected ? 'Copied' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    symbol: PropTypes.string,
    title: PropTypes.string
}

export default EmojiBox