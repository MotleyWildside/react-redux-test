import React, {Component} from "react";
import PropTypes from "prop-types";
import {pickCell} from "../../../actions/matrix";
import {connect} from "react-redux";

class Matrix extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleBlockClick(e) {
        if (!this.props.showOnly) {
            this.props.pickCell({pickedX: +e.target.attributes.row.value, pickedY: +e.target.attributes.col.value})
        }
    }

    render() {
        return (
            <div className="Matrix">
                {this.createMatrix()}
            </div>
        );
    }

    createMatrix() {
        const { props: { matrix, pickedX, pickedY, showOnly }} = this;

        let markup = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                markup.push(
                    <div
                        className={`Matrix__block ${!showOnly && i === pickedX && j === pickedY ? "picked" : ""}` }
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

const mapDispatchToProps = dispatch => {
    return {
        pickCell: ({pickedX, pickedY}) => {
            dispatch(pickCell({pickedX, pickedY}));
        },
    };
};

const mapStateToProps = store => {
    return {
        pickedX: store.matrix.pickedX,
        pickedY: store.matrix.pickedY,
    };
};

Matrix.propTypes = {
    matrix: PropTypes.array,
    showOnly: PropTypes.bool,
};

Matrix.defaultProps = {
    showOnly: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);
