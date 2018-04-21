var cn = require('classnames');
var createReactClass = require('create-react-class');
var React = require('react');

var DayOfWeekPicker = createReactClass({
	  displayName: 'DayOfWeekPicker',

	  label: function label() {
	    if (this.props.label) {
	      return React.createElement('div', { className: "col-xs" }, React.createElement('div', { className: "label" }, this.props.label));
	    }
	  },
	  render: function render() {
	    var activeDays = this.props.active;
	    return React.createElement(
	      'div',
	      { className: 'row' },
	      this.label(),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '0', className: cn("btn item", { active: activeDays.indexOf(0) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Sun
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '1', className: cn("btn item", { active: activeDays.indexOf(1) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Mon
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '2', className: cn("btn item", { active: activeDays.indexOf(2) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Tue
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '3', className: cn("btn item", { active: activeDays.indexOf(3) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Wed
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '4', className: cn("btn item", { active: activeDays.indexOf(4) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Thu
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '5', className: cn("btn item", { active: activeDays.indexOf(5) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Fri
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-xs' },
	        React.createElement(
	          'div',
	          { id: '6', className: cn("btn item", { active: activeDays.indexOf(6) > -1 }), onClick: this.props.onDayChange },
	          this.props.translations.Sat
	        )
	      )
	    );
	  }
	});


module.exports = DayOfWeekPicker;
