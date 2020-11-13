import React, { Component } from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "40px Courier";
  }
  componentDidUpdate() {
    this.ctx.fillText(this.props.input, 210, 75);
  }

  _downloadImage() {
    let fileName = "image";
    const link = document.createElement("a");
    link.download = fileName + ".png";
    console.log(this.canvas);
    this.canvas.toBlob(function (blob) {
      console.log(blob);
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} width={640} height={425} />
        <p onClick={() => this._downloadImage()}>Download Image</p>
      </div>
    );
  }
}
export default Canvas;
