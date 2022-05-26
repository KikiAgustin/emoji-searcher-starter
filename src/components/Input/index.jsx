import PropTypes from 'react'
import style from './Input.module.css'

const Input = ({ onChange, value }) => {
    return (
        <input
            className={style.input}
            onChange={onChange}
            placeholder="Search"
            value={value}
        />
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input