import PropTypes from 'prop-types'

import style from './Emojis.module.css'

const Emojis = ({ emojisData }) => {
    return (
        <div className={style.emojisGrid} >
            {emojisData.map((data, index) => (
                <div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: `&#${data.symbol.codePointAt(0)}`
                        }}
                    />
                </div>
            ))}

        </div >
    )
}

Emojis.propTypes = {
    emojisData: PropTypes.array
}

export default Emojis