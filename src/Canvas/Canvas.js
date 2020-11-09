import React, { Component } from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    const canvas = null;
    const ctx = null;
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "40px Courier";
  }
  componentDidUpdate() {
    this.ctx.fillText(this.props.input, 210, 75);
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    );
  }
}
export default Canvas;
