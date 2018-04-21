var cn = require('classnames');
var createReactClass = require('create-react-class');
var React = require('react');

var DayOfMonthPicker = createReactClass({
	  displayName: 'DayOfMonthPicker',

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
	    var activeDays = this.props.validations;
	    return React.createElement(
	      'div',
	      { style: { width: "300px" } },
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '1', className: cn("btn", { active: activeDays.indexOf(1) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day1
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '2', className: cn("btn", { active: activeDays.indexOf(2) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day2
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '3', className: cn("btn", { active: activeDays.indexOf(3) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day3
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '4', className: cn("btn", { active: activeDays.indexOf(4) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day4
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '5', className: cn("btn", { active: activeDays.indexOf(5) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day5
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '6', className: cn("btn", { active: activeDays.indexOf(6) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day6
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '7', className: cn("btn", { active: activeDays.indexOf(7) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day7
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '8', className: cn("btn", { active: activeDays.indexOf(8) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day8
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '9', className: cn("btn", { active: activeDays.indexOf(9) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day9
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '10', className: cn("btn", { active: activeDays.indexOf(10) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day10
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '11', className: cn("btn", { active: activeDays.indexOf(11) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day11
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '12', className: cn("btn", { active: activeDays.indexOf(12) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day12
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '13', className: cn("btn", { active: activeDays.indexOf(13) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day13
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '14', className: cn("btn", { active: activeDays.indexOf(14) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day14
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '15', className: cn("btn", { active: activeDays.indexOf(15) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day15
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '16', className: cn("btn", { active: activeDays.indexOf(16) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day16
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '17', className: cn("btn", { active: activeDays.indexOf(17) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day17
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '18', className: cn("btn", { active: activeDays.indexOf(18) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day18
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '19', className: cn("btn", { active: activeDays.indexOf(19) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day19
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '20', className: cn("btn", { active: activeDays.indexOf(20) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day20
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '21', className: cn("btn", { active: activeDays.indexOf(21) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day21
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '22', className: cn("btn", { active: activeDays.indexOf(22) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day22
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '23', className: cn("btn", { active: activeDays.indexOf(23) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day23
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '24', className: cn("btn", { active: activeDays.indexOf(24) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day24
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '25', className: cn("btn", { active: activeDays.indexOf(25) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day25
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '26', className: cn("btn", { active: activeDays.indexOf(26) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day26
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '27', className: cn("btn", { active: activeDays.indexOf(27) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day27
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '28', className: cn("btn", { active: activeDays.indexOf(28) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day28
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '29', className: cn("btn", { active: activeDays.indexOf(29) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day29
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '30', className: cn("btn", { active: activeDays.indexOf(30) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day30
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '31', className: cn("btn", { active: activeDays.indexOf(31) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.Day31
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement(
	            'div',
	            { id: '-1', className: cn("btn", { active: activeDays.indexOf(-1) > -1 }), onClick: this.handleDayChange },
	            this.props.translations.LastDay
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement('div', null)
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement('div', null)
	        ),
	        React.createElement(
	          'div',
	          { className: 'col-xs' },
	          React.createElement('div', null)
	        )
	      )
	    );
	  }
	});

module.exports = DayOfMonthPicker;
