var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');
var createReactClass = require('create-react-class');
var React = require('react');

var RulePicker = createReactClass({
  getRule: function() {
    switch (this.props.rule) {
      case "daily":   return <DailyRulePicker translations={this.props.translations.Intervals} showInterval={this.props.showInterval} interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
      case "weekly":  return <WeeklyRulePicker translations={this.props.translations.Intervals} showInterval={this.props.showInterval} interval={this.props.interval} validations={this.props.validations} onIntervalChange={this.props.onIntervalChange} onValidationsChange={this.props.onValidationsChange} />;
      case "monthly": return <MonthlyRulePicker translations={this.props.translations.Intervals} showInterval={this.props.showInterval} interval={this.props.interval} validations={this.props.validations} onIntervalChange={this.props.onIntervalChange} onValidationsChange={this.props.onValidationsChange} />;
      case "yearly":  return <YearlyRulePicker translations={this.props.translations.Intervals} showInterval={this.props.showInterval} interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
    }
  },
  render: function() {
    return (
      <div>
        {this.props.translations.RulePicker.RecurrenceRule}:
        <select value={this.props.rule} onChange={this.props.onRuleChange}>
          {this.props.visibleOptions.daily ? <option value="daily">{this.props.translations.RulePicker.OptionDaily}</option>: null}
          {this.props.visibleOptions.weekly ? <option value="weekly">{this.props.translations.RulePicker.OptionWeekly}</option>: null}
          {this.props.visibleOptions.monthly_day_of_week ? <option value="monthly_day_of_week">{this.props.translations.RulePicker.OptionMonthlyByDayOfWeek}</option>: null}
          {this.props.visibleOptions.monthly_day_of_month ? <option value="monthly_day_of_month">{this.props.translations.RulePicker.OptionMonthlyByDayOfMonth}</option>: null}
          {this.props.visibleOptions.yearly ? <option value="yearly">{this.props.translations.RulePicker.OptionYearly}</option>: null}
        </select>
        {this.getRule()}
      </div>
    );
  }
});


module.exports = RulePicker;
