'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var classNames = require('classnames');

var Grid = React.createClass({
  displayName: 'Grid',

  propTypes: {
    fluid: React.PropTypes.bool
  },
  render: function render() {
    var _props = this.props;
    var fluid = _props.fluid;
    var className = _props.className;

    var other = _objectWithoutProperties(_props, ['fluid', 'className']);

    var containerClass = fluid ? 'container-fluid' : 'container';
    var _className = classNames(className, containerClass);

    return React.createElement(
      'div',
      _extends({}, other, { className: _className }),
      this.props.children
    );
  }
});

module.exports = Grid;