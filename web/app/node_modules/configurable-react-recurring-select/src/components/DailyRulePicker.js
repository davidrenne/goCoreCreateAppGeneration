var createReactClass = require('create-react-class');
var React = require('react');

var DailyRulePicker = createReactClass({
  render: function() {
    if (this.props.showInterval) {
      return (
        <div className="rule">{this.props.translations.Every} <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> {this.props.translations.Days}</div>
      );
    } else {
      return null;
    }
  }
});

module.exports = DailyRulePicker;
