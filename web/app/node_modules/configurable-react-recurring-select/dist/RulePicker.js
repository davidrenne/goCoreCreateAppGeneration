var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');
var createReactClass = require('create-react-class');
var React = require('react');

var RulePicker = createReactClass({
  displayName: 'RulePicker',

  getRule: function getRule() {
    switch (this.props.rule) {
      case "daily":
        return React.createElement(DailyRulePicker, { translations: this.props.translations.Intervals, showInterval: this.props.showInterval, interval: this.props.interval, onIntervalChange: this.props.onIntervalChange });
      case "weekly":
        return React.createElement(WeeklyRulePicker, { translations: this.props.translations.Intervals, showInterval: this.props.showInterval, interval: this.props.interval, validations: this.props.validations, onIntervalChange: this.props.onIntervalChange, onValidationsChange: this.props.onValidationsChange });
      case "monthly":
        return React.createElement(MonthlyRulePicker, { translations: this.props.translations.Intervals, showInterval: this.props.showInterval, interval: this.props.interval, validations: this.props.validations, onIntervalChange: this.props.onIntervalChange, onValidationsChange: this.props.onValidationsChange });
      case "yearly":
        return React.createElement(YearlyRulePicker, { translations: this.props.translations.Intervals, showInterval: this.props.showInterval, interval: this.props.interval, onIntervalChange: this.props.onIntervalChange });
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.props.translations.RulePicker.RecurrenceRule,
      ':',
      React.createElement(
        'select',
        { value: this.props.rule, onChange: this.props.onRuleChange },
        this.props.visibleOptions.daily ? React.createElement(
          'option',
          { value: 'daily' },
          this.props.translations.RulePicker.OptionDaily
        ) : null,
        this.props.visibleOptions.weekly ? React.createElement(
          'option',
          { value: 'weekly' },
          this.props.translations.RulePicker.OptionWeekly
        ) : null,
        this.props.visibleOptions.monthly_day_of_week ? React.createElement(
          'option',
          { value: 'monthly_day_of_week' },
          this.props.translations.RulePicker.OptionMonthlyByDayOfWeek
        ) : null,
        this.props.visibleOptions.monthly_day_of_month ? React.createElement(
          'option',
          { value: 'monthly_day_of_month' },
          this.props.translations.RulePicker.OptionMonthlyByDayOfMonth
        ) : null,
        this.props.visibleOptions.yearly ? React.createElement(
          'option',
          { value: 'yearly' },
          this.props.translations.RulePicker.OptionYearly
        ) : null
      ),
      this.getRule()
    );
  }
});

module.exports = RulePicker;
