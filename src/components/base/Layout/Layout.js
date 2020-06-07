import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Matrix from "../Matrix/Matrix"
import {decrementCell, incrementCell} from "../../../actions/matrix";
import {connect} from "react-redux";
import Controller from "../../../ApiController/Controller";
class Layout extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 0
        }
    }

    increment() {
        this.props.incrementCell();
    }

    decrement() {
        this.props.decrementCell();
    }

    sendRequest() {
        const body = {
            "matrix": this.props.matrix,
        };
        Controller.post("/calculate-matrix", body)
    }

    render() {
        return (
            <div className="Layout">
                <Matrix value={this.state.value}/>
                <hr style={{border: "none"}}/>
                <div className="Layout__container">
                    <Button text="Меньше" handler={() => this.decrement()}/>
                    <Button text="Больше" handler={() => this.increment()}/>
                </div>
                <hr style={{border: "none"}}/>
                <Button text="Отправить" handler={() => this.sendRequest()}/>
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        incrementCell: () => {
            dispatch(incrementCell());
        },
        decrementCell: () => {
            dispatch(decrementCell());
        },
    };
};

Layout.propTypes = {
    value: PropTypes.number
};

export const mapStateToProps = store => {
    return {
        matrix: store.matrix.inputMatrix,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
