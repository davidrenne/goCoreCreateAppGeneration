'use strict';

jest.dontMock('../Grid');

describe('Grid', function () {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react/lib/ReactTestUtils');
  var Grid = require('../Grid');

  it('Should add "container" class', function () {
    var grid = TestUtils.renderIntoDocument(React.createElement(Grid, null));
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container');
  });

  it('Should not replace class', function () {
    var grid = TestUtils.renderIntoDocument(React.createElement(Grid, { className: 'foo' }));
    var className = ReactDOM.findDOMNode(grid).className;
    expect(className).toContain('foo');
    expect(className).toContain('container');
  });

  it('Should add "container-fluid" class if "fluid" property is true', function () {
    var grid = TestUtils.renderIntoDocument(React.createElement(Grid, { fluid: true }));
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container-fluid');
  });
});