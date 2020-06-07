import React, {Component} from "react";
import PropTypes from "prop-types";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    handleButton() {
        if (this.props.handler) {
            this.props.handler()
        }
    }

    render() {
        return (
            <div className="Button" onClick={() => this.handleButton()}>
                {this.props.text}
            </div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
};

export default Button;
