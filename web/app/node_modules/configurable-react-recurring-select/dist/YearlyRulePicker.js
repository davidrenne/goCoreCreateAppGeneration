var createReactClass = require('create-react-class');
var React = require('react');

var YearlyRulePicker = createReactClass({
	  displayName: "YearlyRulePicker",

	  render: function render() {
	    if (this.props.showInterval) {
	      return React.createElement(
	        "div",
	        { className: "rule" },
	        this.props.translations.Every,
	        " ",
	        React.createElement("input", { className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange }),
	        " ",
	        this.props.translations.Years
	      );
	    } else {
	      return null;
	    }
	  }
	});

module.exports = YearlyRulePicker;
