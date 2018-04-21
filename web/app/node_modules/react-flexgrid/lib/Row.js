'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var classNames = require('classnames');

var ModificatorType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

var Row = React.createClass({
  displayName: 'Row',

  propTypes: {
    reverse: React.PropTypes.bool,
    start: ModificatorType,
    center: ModificatorType,
    end: ModificatorType,
    top: ModificatorType,
    middle: ModificatorType,
    bottom: ModificatorType,
    around: ModificatorType,
    between: ModificatorType,
    first: ModificatorType,
    last: ModificatorType
  },
  render: function render() {
    var _props = this.props;
    var reverse = _props.reverse;
    var className = _props.className;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['reverse', 'className', 'children']);

    var modificators = ['row'];
    var passingProps = {};
    for (var key in other) {
      if (modificatorKeys.indexOf(key) > -1) {
        var value = other[key];
        if (value) {
          modificators.push(key + '-' + value);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    if (reverse) {
      modificators.push('reverse');
    }

    var _className = classNames(className, modificators);

    return React.createElement(
      'div',
      _extends({}, passingProps, { className: _className }),
      children
    );
  }
});

module.exports = Row;