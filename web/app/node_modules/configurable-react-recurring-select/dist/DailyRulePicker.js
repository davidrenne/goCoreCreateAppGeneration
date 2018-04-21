var createReactClass = require('create-react-class');
var React = require('react');

var DailyRulePicker = createReactClass({
	  displayName: "DailyRulePicker",

	  render: function render() {
	    if (this.props.showInterval) {
	      return React.createElement(
	        "div",
	        { className: "rule" },
	        this.props.translations.Every,
	        " ",
	        React.createElement("input", { className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange }),
	        " ",
	        this.props.translations.Days
	      );
	    } else {
	      return null;
	    }
	  }
	});

module.exports = DailyRulePicker;
