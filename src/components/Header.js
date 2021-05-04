import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <button style ={buttonStyle} onClick={props.onClick}>
            click me boy
        </button>
    )
}
Header.defaultProps ={
    title:'hello',
}
Header.propTypes = {
    title: PropTypes.string
}
const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    height : "50px",
    width: "150px",
    border: "1px solid red",
    outline: "none",
    marginLeft: "100px",
    borderRadius: "40px",
    cursor: "pointer"
}
export default Header
