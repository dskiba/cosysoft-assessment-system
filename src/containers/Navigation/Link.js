import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";

class Link extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    location: PropTypes.string,
    onNavigate: PropTypes.func
  };

  render() {
    const { render, location, onNavigate } = this.props;
    return render(location, onNavigate);
  }
}

const mapStateToProps = state => ({
  location: state.getIn(["router", "location", "pathname"])
});

const mapDispatchToProps = dispatch => ({
  onNavigate: url => dispatch(push(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
