var RulePicker = require('./RulePicker.js');
var TimePicker = require('react-time-picker-react15');
var DatePicker = require('react-date-picker');
var RuleSummary = require("./RuleSummary.js");
var moment = require('moment');
var Tabs = require('react-simpletabs-react15');
var createReactClass = require('create-react-class');
var React = require('react');



var translations = {};
translations["RulePicker"] = {};
translations["TimePicker"] = {};
translations["DatePicker"] = {};
translations["RuleSummary"] = {};
translations["Errors"] = {};
translations["Buttons"] = {};
translations["Intervals"] = {};
translations["RulePicker"]["RecurrenceRule"] = "Recurrence Rule";
translations["RulePicker"]["OptionDaily"] = "Daily";
translations["RulePicker"]["OptionWeekly"] = "Weekly";
translations["RulePicker"]["OptionMonthlyByDayOfWeek"] = "Monthly (by day of week)";
translations["RulePicker"]["OptionMonthlyByDayOfMonth"] = "Monthly (by day of month)";
translations["RulePicker"]["OptionYearly"] = "Yearly";
translations["RulePicker"]["RecurrenceRule"] = "Recurrence Rule";
translations["TimePicker"]["OccurrenceTime"] = "Occurrence Time";
translations["DatePicker"]["RecurringUntil"] = "Recurring Until";
translations["DatePicker"]["RecurringForever"] = "Recurring forever";
translations["DatePicker"]["ChangeToSpecificDate"] = "Change To Specific Date";
translations["DatePicker"]["RecurringEndingOn"] = "Recurring Ending On:";
translations["DatePicker"]["ChangeToForever"] = "Change To Forever";
translations["RuleSummary"]["LanguageNotSupported"] = "Click To View";
translations["Buttons"]["Save"] = "Save";
translations["Intervals"]["Every"] = "Every";
translations["Intervals"]["Days"] = "day(s)";
translations["Intervals"]["Years"] = "year(s)";
translations["Intervals"]["WeeksOn"] = "week(s) on";
translations["Intervals"]["MonthsOn"] = "month(s) on";
translations["Intervals"]["LastDay"] = "Last Day";
translations["Intervals"]["Day1"] = "1";
translations["Intervals"]["Day2"] = "2";
translations["Intervals"]["Day3"] = "3";
translations["Intervals"]["Day4"] = "4";
translations["Intervals"]["Day5"] = "5";
translations["Intervals"]["Day6"] = "6";
translations["Intervals"]["Day7"] = "7";
translations["Intervals"]["Day8"] = "8";
translations["Intervals"]["Day9"] = "9";
translations["Intervals"]["Day10"] = "10";
translations["Intervals"]["Day11"] = "11";
translations["Intervals"]["Day12"] = "12";
translations["Intervals"]["Day13"] = "13";
translations["Intervals"]["Day14"] = "14";
translations["Intervals"]["Day15"] = "15";
translations["Intervals"]["Day16"] = "16";
translations["Intervals"]["Day17"] = "17";
translations["Intervals"]["Day18"] = "18";
translations["Intervals"]["Day19"] = "19";
translations["Intervals"]["Day20"] = "20";
translations["Intervals"]["Day21"] = "21";
translations["Intervals"]["Day22"] = "22";
translations["Intervals"]["Day23"] = "23";
translations["Intervals"]["Day24"] = "24";
translations["Intervals"]["Day25"] = "25";
translations["Intervals"]["Day26"] = "26";
translations["Intervals"]["Day27"] = "27";
translations["Intervals"]["Day28"] = "28";
translations["Intervals"]["Day29"] = "29";
translations["Intervals"]["Day30"] = "30";
translations["Intervals"]["Day31"] = "31";
translations["Intervals"]["Week1"] = "Week 1: ";
translations["Intervals"]["Week2"] = "Week 2: ";
translations["Intervals"]["Week3"] = "Week 3: ";
translations["Intervals"]["Week4"] = "Week 4: ";
translations["Intervals"]["Sun"] = "Sun";
translations["Intervals"]["Mon"] = "Mon";
translations["Intervals"]["Tue"] = "Tue";
translations["Intervals"]["Wed"] = "Wed";
translations["Intervals"]["Thu"] = "Thu";
translations["Intervals"]["Fri"] = "Fri";
translations["Intervals"]["Sat"] = "Sat";
translations["Errors"]["SelectOneDate"] = "Please select at least one date";

var RecurringSelect = createReactClass({
  displayName: 'RecurringSelect',

  getInitialState: function getInitialState() {
    var until = "";
    if (this.props.allowForever || this.props.until == undefined) {
      until = "0000-00-00";
    } else {
      until = moment().format('YYYY-MM-DD');
    }

    return {
      showCalendar: this.props.until == undefined || until == "0000-00-00" ? false: true,
      rule: this.props.rule == undefined ? "daily" : this.props.rule,
      interval: this.props.interval == undefined ? 1 : this.props.interval,
      validations: this.props.validations == undefined ? null : this.props.validations,
      until: this.props.until == undefined ? until : this.props.until,
      startTime: this.props.startTime == undefined || this.props.startTime == "" ? "10:00 AM" : this.props.startTime
    };
  },
  handleToggleForeverChange: function handleToggleForeverChange(e) {
    this.setState({
      until: !this.state.showCalendar ? moment().format('YYYY-MM-DD') : "0000-00-00",
      showCalendar: !this.state.showCalendar
    });
  },
  handleRuleChange: function handleRuleChange(e) {
    var rule = e.target.value;
    var validations = null;
    if (rule === "weekly") validations = [];
    if (rule === "monthly_day_of_week") {
      rule = "monthly";
      validations = { 1: [], 2: [], 3: [], 4: [] };
    }
    if (rule === "monthly_day_of_month") {
      rule = "monthly";
      validations = [];
    }
    this.setState({
      rule: rule,
      validations: validations
    });
  },
  handleIntervalChange: function handleIntervalChange(e) {
    var interval;
    if (e.target.value != "") {
      interval = parseInt(e.target.value);
    } else {
      interval = 0;
    }
    this.setState({
      interval: interval
    });
  },
  handleValidationsChange: function handleValidationsChange(validations) {
    this.setState({
      validations: validations
    });
  },
  handleEndDateChange: function handleEndDateChange(date) {
    this.setState({
      until: date
    });
  },
  handleTimeChange: function handleTimeChange(time) {
    this.setState({
      startTime: time
    });
  },
  anyRenderBottom: function anyRenderBottom() {
    if (typeof this.props.anyRenderBottom == "function") {
      return this.props.anyRenderBottom();
    }
    return null;
  },
  handleSave: function handleSave(e) {
    var hash = this.state;
    var data = {
      valid: true,
      error_message: ""
    };

    var validations = hash.validations == null ? [] : hash.validations;

    if ((hash.rule == "weekly" || hash.rule == "monthly") && validations.length == 0) {
      data.valid = false;
      data.error_message = this.props.translations.Errors.SelectOneDate;
    }

    var start = null;

    if (this.props.useSeconds) {
      start = moment(hash.startTime, "hh:mm:ss A");
    } else {
      start = moment(hash.startTime, "hh:mm a A");
    }
    var minute = start.minute();
    var hour = start.hour();

    if (this.props.convertToIceCube) {
      var rule_type;
      switch (hash.rule) {
        case 'daily':
          rule_type = "IceCube::DailyRule";
          break;
        case 'weekly':
          rule_type = "IceCube::WeeklyRule";
          break;
        case 'monthly':
          rule_type = "IceCube::MonthlyRule";
          break;
        case 'yearly':
          rule_type = "IceCube::YearlyRule";
          break;
      }
      var interval = hash.interval;
      var newValidations = {};
      if (Array.isArray(validations) && rule_type == "IceCube::WeeklyRule") {
        newValidations["day"] = validations;
      } else if (Array.isArray(validations) && rule_type == "IceCube::MonthlyRule") {
        newValidations["day_of_month"] = validations;
      } else if (rule_type == "IceCube::MonthlyRule") {
        newValidations["day_of_week"] = validations;
      }
      newValidations["hour_of_day"] = hour;
      newValidations["minute_of_hour"] = minute;
      var until = hash.until;
      data["rule_type"] = rule_type;
      data["interval"] = interval;
      data["validations"] = newValidations;
      data["until"] = until;
      this.props.onSave(JSON.stringify(data));
    } else {
      data["start_time"] = start;
      data["rule_type"] = hash.rule;
      data["interval"] = hash.interval;
      data["validations"] = validations;
      data["until"] = hash.until;
      this.props.onSave(data);
    }
  },
  render: function render() {
    var timeWidget = React.createElement(TimePicker, { format: this.props.useSeconds ? 'H:mm:ss a' : null, value: this.state.startTime, onChange: this.handleTimeChange });

    return React.createElement(
      'div',
      { className: 'recurring-select' },
      React.createElement(
        Tabs,
        null,
        React.createElement(
          Tabs.Panel,
          { title: this.props.translations.RulePicker.RecurrenceRule },
          React.createElement(RulePicker, {
            visibleOptions: this.props.visibleOptions,
            showInterval: this.props.showInterval,
            rule: this.state.rule,
            interval: this.state.interval,
            validations: this.state.validations,
            translations: this.props.translations,
            onRuleChange: this.handleRuleChange,
            onIntervalChange: this.handleIntervalChange,
            onValidationsChange: this.handleValidationsChange }),
          React.createElement('br', null),
          this.props.showTimeOnSameTab ? timeWidget : null
        ),
        !this.props.showTimeOnSameTab ? React.createElement(
          Tabs.Panel,
          { title: this.props.translations.TimePicker.OccurrenceTime },
          timeWidget
        ) : React.createElement(Tabs.Panel, null),
        React.createElement(
          Tabs.Panel,
          { title: this.props.translations.DatePicker.RecurringUntil },
          this.state.until == "0000-00-00" ? React.createElement(
            'span',
            null,
            this.props.translations.DatePicker.RecurringForever,
            ' (',
            React.createElement(
              'a',
              { href: 'javascript:', onClick: this.handleToggleForeverChange },
              this.props.translations.DatePicker.ChangeToSpecificDate
            ),
            ')'
          ) : React.createElement(
            'span',
            null,
            this.props.translations.DatePicker.RecurringEndingOn,
            ' ',
            this.state.until,
            ' (',
            React.createElement(
              'a',
              { href: 'javascript:', onClick: this.handleToggleForeverChange },
              this.props.translations.DatePicker.ChangeToForever
            ),
            ')'
          ),
          this.state.showCalendar ? React.createElement(DatePicker, { locale: this.props.language, minDate: moment().format("YYYY-MM-DD"), date: this.state.until == "0000-00-00" ? "" : this.state.until, onChange: this.handleEndDateChange }) : null
        )
      ),
      React.createElement('hr', null),
      this.props.showSummary ? React.createElement(RuleSummary, { showLanguageNotSupportedMessage: this.props.showLanguageNotSupportedMessage, fields: this.state, showInterval: this.props.showInterval, translations: this.props.translations.RuleSummary, language: this.props.language }) : null,
      React.createElement(
        'span',
        { onClick: this.handleSave },
        this.props.button
      ),
      this.anyRenderBottom()
    );
  }
});
module.exports = RecurringSelect;
