import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {pickTab} from "../../../actions/tabs";

class Tabs extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleTabClick(index) {
        if (this.props.tabs[index].condition) {
            this.props.pickTab(index)
        }
    }

    render() {
        return (
            <div className="Tabs">
                {this.props.tabs.map((tab, i) =>
                    <div
                        className={`Tabs__tab ${i === this.props.picked && "picked"} ${!tab.condition && "disabled"}`}
                        onClick={() => this.handleTabClick(i)
                    }>{tab.name}</div>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pickTab: (index) => {
            dispatch(pickTab(index));
        },
    };
};

const mapStateToProps = store => {
    return {
        picked: store.tabs.currentTab,
    };
};

Tabs.propTypes = {
    tabs: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
