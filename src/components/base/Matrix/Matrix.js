import React, {Component} from "react";
import PropTypes from "prop-types";
import {pickCell} from "../../../actions/matrix";
import {connect} from "react-redux";

class Matrix extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleBlockClick(e) {
        this.props.pickCell({pickedX: +e.target.attributes.row.value, pickedY: +e.target.attributes.col.value})
    }

    render() {
        return (
            <div className="Matrix">
                {this.createMatrix()}
            </div>
        );
    }

    createMatrix() {
        const { props: { matrix, pickedX, pickedY }} = this;

        let markup = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                markup.push(
                    <div
                        className={`Matrix__block ${i === pickedX && j === pickedY ? "picked" : ""}` }
                        row={i}
                        col={j}
                        onClick={(e) => this.handleBlockClick(e)}
                    >{matrix[i][j]}</div>
                );
            }
        }

        return markup.map((item) => item);
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        pickCell: ({pickedX, pickedY}) => {
            dispatch(pickCell({pickedX, pickedY}));
        },
    };
};

export const mapStateToProps = store => {
    return {
        matrix: store.matrix.inputMatrix,
        pickedX: store.matrix.pickedX,
        pickedY: store.matrix.pickedY,
    };
};

Matrix.propTypes = {
    value: PropTypes.number
};


export default connect(mapStateToProps, mapDispatchToProps)(Matrix);
