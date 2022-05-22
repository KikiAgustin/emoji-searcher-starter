import PropTypes from 'prop-types'

import style from './Empty.module.css'

const Empty = ({ text }) => {
    return (
        <div className={style.empty} >
            {text}
        </div>
    )
}

Empty.propTypes = {
    text: PropTypes.string.isRequired
}

export default Empty