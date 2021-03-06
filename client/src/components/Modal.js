import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <h2 className>Success!</h2>
        <div className="modal-content">{this.props.children}</div>
        <div className="actions">
          <button className="close" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
