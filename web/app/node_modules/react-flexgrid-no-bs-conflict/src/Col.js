const React = require('react');

const Col = React.createClass({
  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    reverse: React.PropTypes.bool
  },
  _classMap: {
    xs: 'flex-xs-',
    sm: 'flex-sm-',
    md: 'flex-md-',
    lg: 'flex-lg-',
    xsOffset: 'flex-xs-offset-',
    smOffset: 'flex-sm-offset-',
    mdOffset: 'flex-md-offset-',
    lgOffset: 'flex-lg-offset-'
  },
  render() {
    const { reverse, className, ...other} = this.props;
    let classes = [];

    if (className) {
      classes.push(className);
    }

    if (reverse) {
      classes.push('reverse');
    }

    let passingProps = {};
    for (let key in other) {
      if (this._classMap[key]) {
        const value = other[key];
        if (value) {
          classes.push(`${this._classMap[key]}${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    return React.createElement('div', Object.assign({}, passingProps, {
      className: classes.join(' ')
    }), this.props.children);
  }
});

module.exports = Col;
