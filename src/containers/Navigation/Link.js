import React from "react";
import PropTypes from "prop-types";

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

export default Link;
