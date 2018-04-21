var RecurringSelect = require('./components/RecurringSelect.js');
var createReactClass = require('create-react-class');

var translations = {};
translations["RulePicker"] = {};
translations["TimePicker"] = {};
translations["DatePicker"] = {};
translations["RuleSummary"] = {};
translations["Buttons"] = {};
translations["Errors"] = {};
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
translations["RuleSummary"]["LanguageNotSupported"] = "Click To View Schedule";
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


var App = createReactClass({
  render: function() {

      // <RecurringSelect
      // rule="weekly" startTime="11:40:21 AM" validations={[2,5,6]} interval={2}
      // button={<button className="btn save">{translations.Buttons.Save}</button>} visibleOptions={{
      //     daily: true,
      //     weekly: true,
      //     monthly_day_of_week: false,
      //     monthly_day_of_month: false,
      //     yearly: false
      //   }} showLanguageNotSupportedMessage={false} translations={translations} language="en" onSave={function(data){
      //     console.log(data);
      //   }}/>
    return (
      <RecurringSelect button={<button className="btn save">{translations.Buttons.Save}</button>} translations={translations}   onSave={function(data){
          console.log(data);
        }}/>
    );
  }
});

module.exports = App;
