import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EmojiBox from '../EmojiBox'
import style from './Emojis.module.css'
import { filterEmojis } from '../../utils/filterEmoji'


const Emojis = ({ emojisData, searchText }) => {
    const [filteredEmojis, setFilteredEmojis] = useState([])

    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData,
            searchText
        }))
    }, [emojisData, searchText])
    return (
        <div className={style.emojisGrid} >
            {filteredEmojis.map((data, index) => (
                <EmojiBox
                    key={index}
                    title={data.title}
                    symbol={data.symbol}
                />
            ))}

        </div >
    )
}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default Emojis