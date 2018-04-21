var React = require('react');
var cn = require('classnames');
var createReactClass = require('create-react-class');

var DayOfWeekPicker = createReactClass({
  label: function() {
    if (this.props.label) {
      return React.createElement('div', {className:"col-xs"}, React.createElement('div', {className:"label"}, this.props.label));
    }
  },
  render: function() {
    var activeDays = this.props.active;
    return (
      <div className="row">
        {this.label()}
        <div className="col-xs">
          <div id="0" className={cn("btn item", {active: activeDays.indexOf(0) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Sun}</div>
        </div>
        <div className="col-xs">
          <div id="1" className={cn("btn item", {active: activeDays.indexOf(1) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Mon}</div>
        </div>
        <div className="col-xs">
          <div id="2" className={cn("btn item", {active: activeDays.indexOf(2) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Tue}</div>
        </div>
        <div className="col-xs">
          <div id="3" className={cn("btn item", {active: activeDays.indexOf(3) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Wed}</div>
        </div>
        <div className="col-xs">
          <div id="4" className={cn("btn item", {active: activeDays.indexOf(4) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Thu}</div>
        </div>
        <div className="col-xs">
          <div id="5" className={cn("btn item", {active: activeDays.indexOf(5) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Fri}</div>
        </div>
        <div className="col-xs">
          <div id="6" className={cn("btn item", {active: activeDays.indexOf(6) > -1})} onClick={this.props.onDayChange}>{this.props.translations.Sat}</div>
        </div>
      </div>
    );
  }
});

module.exports = DayOfWeekPicker;
