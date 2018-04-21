var DayOfWeekPicker = require('./DayOfWeekPicker.js');
var createReactClass = require('create-react-class');
var React = require('react');

var WeeklyRulePicker = createReactClass({
  handleDayChange: function(e) {
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
  render: function() {
    var days = this.props.validations;

    var intervalInput = null;
    if (this.props.showInterval) {
      intervalInput = <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input>
    } else {
      intervalInput = <span>{this.props.interval}</span>
    }
    var interval = <span>{this.props.translations.Every} {intervalInput} {this.props.translations.WeeksOn}:</span>

    return (
      <div className="rule">
        {interval}
        <DayOfWeekPicker translations={this.props.translations} onDayChange={this.handleDayChange} active={days} />
      </div>
    );
  }
});

module.exports = WeeklyRulePicker;
