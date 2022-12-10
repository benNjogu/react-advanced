import React from "react";

function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = { showTooltip: false };

    mouseOver = () => this.setState({ showTooltip: true });
    mouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component showTooltip={this.state.showTooltip} {...this.props} />
        </div>
      );
    }
  };
}

export default withToolTip;
