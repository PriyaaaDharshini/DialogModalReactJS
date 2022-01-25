import React from "react";
import "./dialog.scss";

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openStyle: {
        display: "flex"
      },
      closeStyle: {
        display: "none"
      },
      showModal: false
    };
  }

  actionModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  header = () => {
    return (
      <div style={{ backgroundColor: "lightblue" }}>
        <h1>Header</h1>
      </div>
    );
  };
  content = () => {
    return (
      <div style={{ backgroundColor: "grey", marginTop: "0", paddingTop: "0" }}>
        Content
      </div>
    );
  };
  render() {
    const actionModal = () => {
      this.setState((prevState) => ({
        showModal: !prevState.showModal
      }));
      console.log(this.state.showModal);
    };
    return (
      <>
        <div
          className="dialogDiv"
          style={{ display: this.state.showModal ? "flex" : "none" }}
        >
          <button className="closeBtn" onClick={actionModal}>
            X
          </button>
          {this.header()}
          {this.content()}
        </div>
        <button
          style={{ display: !this.state.showModal ? "flex" : "none" }}
          onClick={() => actionModal()}
        >
          Open
        </button>
      </>
    );
  }
}
export default Dialog;
