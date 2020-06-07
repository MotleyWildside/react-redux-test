import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Matrix from "../Matrix/Matrix"
import {decrementCell, incrementCell, setTransparantedMatrix} from "../../../actions/matrix";
import {connect} from "react-redux";
import Controller from "../../../ApiController/Controller";
import Tabs from "../Tabs/Tabs";
class Layout extends Component {

    constructor(props, context) {
        super(props, context);
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

        Controller.post("/calculate-matrix", body).then((resolve) => {
            this.props.setTransparantedMatrix(resolve.data)
        });
    }

    renderMatrix() {
        switch (this.props.currentTab) {
            case 0:
                return <Matrix matrix={this.props.matrix}/>;
            case 1:
                return <Matrix showOnly={true} matrix={this.props.outputMatrix}/>
            default:
                return null;
        }
    }

    render() {
        const tabs = [
            {
                name: "Создать",
                condition: !!this.props.matrix
            },
            {
                name: "Получить",
                condition: !!this.props.outputMatrix
            }
        ];

        return (
            <div className="Layout">
                <Tabs tabs={tabs} />
                <hr style={{border: "none"}}/>
                {this.renderMatrix()}
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

const mapDispatchToProps = dispatch => {
    return {
        incrementCell: () => {
            dispatch(incrementCell());
        },
        decrementCell: () => {
            dispatch(decrementCell());
        },
        setTransparantedMatrix: (matrix) => {
            dispatch(setTransparantedMatrix(matrix))
        }
    };
};

Layout.propTypes = {
    value: PropTypes.number
};

const mapStateToProps = store => {
    return {
        matrix: store.matrix.inputMatrix,
        outputMatrix: store.matrix.transparentedMatrix,
        currentTab: store.tabs.currentTab,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
