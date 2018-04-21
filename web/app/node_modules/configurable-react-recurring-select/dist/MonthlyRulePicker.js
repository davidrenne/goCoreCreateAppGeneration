var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');
var DayOfMonthPicker = require('./DayOfMonthPicker.js');
var createReactClass = require('create-react-class');
var React = require('react');

var MonthlyRulePicker = createReactClass({
	  displayName: 'MonthlyRulePicker',

	  render: function render() {
	    var pickerComponent;
	    if (this.props.validations.constructor == Array) {
	      pickerComponent = React.createElement(DayOfMonthPicker, { validations: this.props.validations, translations: this.props.translations, onValidationsChange: this.props.onValidationsChange });
	    } else if (this.props.validations.constructor == Object) {
	      pickerComponent = React.createElement(DayOfWeekOfMonthPicker, { translations: this.props.translations, validations: this.props.validations, onValidationsChange: this.props.onValidationsChange });
	    }

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
	      this.props.translations.MonthsOn,
	      ':'
	    );

	    return React.createElement(
	      'div',
	      { className: 'rule' },
	      interval,
	      pickerComponent
	    );
	  }
	});

module.exports = MonthlyRulePicker;
