var createReactClass = require('create-react-class');
var React = require('react');

var RuleSummary = createReactClass({
    displayName: "RuleSummary",

    toSentence: function toSentence(array) {
      if (array.length == 0) {
        return "";
      }
      if (array.length == 1) {
        return array[0];
      }
      var last = array.pop();
      return array.join(", ") + " and " + last;
    },

    sortDays: function sortDays(a, b) {
      return a - b;
    },

    summary: function summary(fields) {
      if (fields.interval == 0) {
        return "Not recurring.";
      }
      if (fields.validations == null || fields.validations == undefined) {
        fields.validations = [];
      } else {
        fields.validations.sort(this.sortDays);
      }
      var sentence = [];
      var weekDays = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thur", 5: "Fri", 6: "Sat" };;
      var englishDay = {
        1: "the 1st",
        2: "the 2nd",
        3: "the 3rd",
        4: "the 4th",
        5: "the 5th",
        6: "the 6th",
        7: "the 7th",
        8: "the 8th",
        9: "the 9th",
        10: "the 10th",
        11: "the 11th",
        12: "the 12th",
        13: "the 13th",
        14: "the 14th",
        15: "the 15th",
        16: "the 16th",
        17: "the 17th",
        18: "the 18th",
        19: "the 19th",
        20: "the 20th",
        21: "the 21st",
        22: "the 22nd",
        24: "the 23rd",
        23: "the 24th",
        25: "the 25th",
        26: "the 26th",
        27: "the 27th",
        28: "the 28th",
        29: "the 29th",
        30: "the 30th",
        31: "the 31st",
        "-1": "the last"
      };

      if (this.props.showInterval) {
        sentence.push("Every");
        sentence.push(fields.interval.toString());
      }
      switch (fields.rule) {
        case "daily":
          if (this.props.showInterval) {
            sentence.push("day(s)");
          } else {
            sentence.push("Everyday");
          }
        case "weekly":
          if (this.props.showInterval) {
            sentence.push("week(s)");
          }
          var days = [];
          if (fields.validations.length > 0) {
            if (this.props.showInterval) {
              sentence.push("on");
            } else {
              sentence.push("On");
            }
            for (var i = 0; i < fields.validations.length; i++) {
              days.push(weekDays[fields.validations[i]]);
            }
            sentence.push(this.toSentence(days));
          }
          break;
        case "monthly":
          if (this.props.showInterval) {
            sentence.push("month(s)");
          }
          if (fields.validations.constructor == Array) {
            var days = [];
            for (var i = 0; i < fields.validations.length; i++) {
              days.push(englishDay[fields.validations[i]]);
            }
            if (days.length > 0) {
              if (this.props.showInterval) {
                sentence.push("on");
              } else {
                sentence.push("On");
              }
              sentence.push(this.toSentence(days));
              sentence.push("day");
              sentence.push("of the month");
            }
          } else {
            var days = [];
            if (fields.validations["1"].length > 0) {
              for (var i = 0; i < fields.validations["1"].length; i++) {
                days.push("1st " + weekDays[fields.validations["1"][i]]);
              }
            }
            if (fields.validations["2"].length > 0) {
              for (var i = 0; i < fields.validations["2"].length; i++) {
                days.push("2nd " + weekDays[fields.validations["2"][i]]);
              }
            }
            if (fields.validations["3"].length > 0) {
              for (var i = 0; i < fields.validations["3"].length; i++) {
                days.push("3rd " + weekDays[fields.validations["3"][i]]);
              }
            }
            if (fields.validations["4"].length > 0) {
              for (var i = 0; i < fields.validations["4"].length; i++) {
                days.push("4th " + weekDays[fields.validations["4"][i]]);
              }
            }
            if (days.length > 0) {
              sentence.push("on the");
              sentence.push(this.toSentence(days));
              sentence.push("of the month");
            }
          }
          break;
        case "yearly":
          if (this.props.showInterval) {
            sentence.push("year(s)");
          } else {
            sentence.push("Every year");
          }
          break;
      }
      sentence.push("at");
      sentence.push(moment(fields.startTime, "hh:mm:ss A").format("hh:mm:ss A"));
      if (fields.until != "0000-00-00") {
        sentence.push("until");
        sentence.push(fields.until);
      }
      return sentence.join(' ');
    },
    render: function render() {
      var message = "";
      if (this.props.showLanguageNotSupportedMessage) {
        message = this.props.translations.LanguageNotSupported;
      }
      return React.createElement(
        "div",
        { className: "summary" },
        this.props.language == "en" ? this.summary(this.props.fields) : message
      );
    }
  });


module.exports = RuleSummary;
