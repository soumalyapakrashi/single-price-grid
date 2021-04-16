import PropTypes from "prop-types";
import "./Button.css";

function Button({ link }) {
    return(
        <>
            <a href={link}>Sign Up</a>
        </>
    );
}

Button.defaultProps = {
    link: "#",
};

// Only accept strings as link types
Button.propTypes = {
    link: PropTypes.string,
};

export default Button;