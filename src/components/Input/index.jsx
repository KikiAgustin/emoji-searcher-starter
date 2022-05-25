import PropTypes from 'prop-types'
import style from './Input.module.css'

const Input = ({ onChange, value }) => {
    return (

        <Input
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