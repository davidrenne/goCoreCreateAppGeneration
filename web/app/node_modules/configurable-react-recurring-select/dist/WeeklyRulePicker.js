var DayOfWeekPicker = require('./DayOfWeekPicker.js');
var createReactClass = require('create-react-class');
var React = require('react');

var WeeklyRulePicker = createReactClass({
	  displayName: 'WeeklyRulePicker',

	  handleDayChange: function handleDayChange(e) {
	    var days = this.props.validations;
	    var day = parseInt(e.target.id);
	    var index = days.indexOf(day);
	    if (index > -1) {
	      days.splice(index, 1);
	    } else {
	      days.push(day);
	    }
	    this.props.onValidationsChange(days);
	  },
	  render: function render() {
	    var days = this.props.validations;

	    var intervalInput = null;
	    if (this.props.showInterval) {
	      intervalInput = React.createElement('input', { className: 'interval', type: 'text', value: this.props.interval, onChange: this.props.onIntervalChange });
	    } else {
	      intervalInput = React.createElement(
	        'span',
	        null,
	        this.props.interval
	      );
	    }
	    var interval = React.createElement(
	      'span',
	      null,
	      this.props.translations.Every,
	      ' ',
	      intervalInput,
	      ' ',
	      this.props.translations.WeeksOn,
	      ':'
	    );

	    return React.createElement(
	      'div',
	      { className: 'rule' },
	      interval,
	      React.createElement(DayOfWeekPicker, { translations: this.props.translations, onDayChange: this.handleDayChange, active: days })
	    );
	  }
	});

module.exports = WeeklyRulePicker;
