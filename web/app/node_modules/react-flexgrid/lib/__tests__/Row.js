'use strict';

jest.dontMock('../Row');

describe('Row', function () {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react/lib/ReactTestUtils');
  var Row = require('../Row');

  it('Should add "row" class', function () {
    var row = TestUtils.renderIntoDocument(React.createElement(Row, null));
    expect(ReactDOM.findDOMNode(row).className).toEqual('row');
  });

  it('Should add "reverse" class if "reverse" property is true', function () {
    var row = TestUtils.renderIntoDocument(React.createElement(Row, { reverse: true }));
    expect(ReactDOM.findDOMNode(row).className).toContain('reverse');
  });

  it('Should not replace class', function () {
    var row = TestUtils.renderIntoDocument(React.createElement(Row, { className: 'foo' }));
    var className = ReactDOM.findDOMNode(row).className;
    expect(className).toContain('foo');
    expect(className).toContain('row');
  });

  it('Should add modificators', function () {
    var row = TestUtils.renderIntoDocument(React.createElement(Row, {
      start: 'xs',
      center: 'sm',
      end: 'md',
      top: 'lg',
      middle: 'xs',
      bottom: 'sm',
      around: 'md',
      between: 'lg',
      first: 'xs',
      last: 'sm'
    }));
    var className = ReactDOM.findDOMNode(row).className;

    expect(className).toContain('row');
    expect(className).toContain('start-xs');
    expect(className).toContain('center-sm');
    expect(className).toContain('end-md');
    expect(className).toContain('top-lg');
    expect(className).toContain('middle-xs');
    expect(className).toContain('bottom-sm');
    expect(className).toContain('around-md');
    expect(className).toContain('between-lg');
    expect(className).toContain('first-xs');
    expect(className).toContain('last-sm');
  });
});