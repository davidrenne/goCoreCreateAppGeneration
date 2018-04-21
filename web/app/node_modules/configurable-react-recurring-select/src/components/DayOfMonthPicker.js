var cn = require('classnames');
var createReactClass = require('create-react-class');
var React = require('react');

var DayOfMonthPicker = createReactClass({
  handleDayChange: function (e) {
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
    var activeDays = this.props.validations;
    return (
      <div style={{width: "300px"}}>
        <div className="row">
          <div className="col-xs">
          <div id="1" className={cn("btn", {active: activeDays.indexOf(1) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day1}</div>
          </div>
          <div className="col-xs">
          <div id="2" className={cn("btn", {active: activeDays.indexOf(2) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day2}</div>
          </div>
          <div className="col-xs">
          <div id="3" className={cn("btn", {active: activeDays.indexOf(3) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day3}</div>
          </div>
          <div className="col-xs">
          <div id="4" className={cn("btn", {active: activeDays.indexOf(4) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day4}</div>
          </div>
          <div className="col-xs">
          <div id="5" className={cn("btn", {active: activeDays.indexOf(5) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day5}</div>
          </div>
          <div className="col-xs">
          <div id="6" className={cn("btn", {active: activeDays.indexOf(6) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day6}</div>
          </div>
          <div className="col-xs">
          <div id="7" className={cn("btn", {active: activeDays.indexOf(7) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day7}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
          <div id="8" className={cn("btn", {active: activeDays.indexOf(8) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day8}</div>
          </div>
          <div className="col-xs">
          <div id="9" className={cn("btn", {active: activeDays.indexOf(9) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day9}</div>
          </div>
          <div className="col-xs">
          <div id="10" className={cn("btn", {active: activeDays.indexOf(10) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day10}</div>
          </div>
          <div className="col-xs">
          <div id="11" className={cn("btn", {active: activeDays.indexOf(11) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day11}</div>
          </div>
          <div className="col-xs">
          <div id="12" className={cn("btn", {active: activeDays.indexOf(12) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day12}</div>
          </div>
          <div className="col-xs">
          <div id="13" className={cn("btn", {active: activeDays.indexOf(13) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day13}</div>
          </div>
          <div className="col-xs">
          <div id="14" className={cn("btn", {active: activeDays.indexOf(14) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day14}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
          <div id="15" className={cn("btn", {active: activeDays.indexOf(15) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day15}</div>
          </div>
          <div className="col-xs">
          <div id="16" className={cn("btn", {active: activeDays.indexOf(16) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day16}</div>
          </div>
          <div className="col-xs">
          <div id="17" className={cn("btn", {active: activeDays.indexOf(17) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day17}</div>
          </div>
          <div className="col-xs">
          <div id="18" className={cn("btn", {active: activeDays.indexOf(18) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day18}</div>
          </div>
          <div className="col-xs">
          <div id="19" className={cn("btn", {active: activeDays.indexOf(19) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day19}</div>
          </div>
          <div className="col-xs">
          <div id="20" className={cn("btn", {active: activeDays.indexOf(20) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day20}</div>
          </div>
          <div className="col-xs">
          <div id="21" className={cn("btn", {active: activeDays.indexOf(21) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day21}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
          <div id="22" className={cn("btn", {active: activeDays.indexOf(22) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day22}</div>
          </div>
          <div className="col-xs">
          <div id="23" className={cn("btn", {active: activeDays.indexOf(23) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day23}</div>
          </div>
          <div className="col-xs">
          <div id="24" className={cn("btn", {active: activeDays.indexOf(24) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day24}</div>
          </div>
          <div className="col-xs">
          <div id="25" className={cn("btn", {active: activeDays.indexOf(25) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day25}</div>
          </div>
          <div className="col-xs">
          <div id="26" className={cn("btn", {active: activeDays.indexOf(26) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day26}</div>
          </div>
          <div className="col-xs">
          <div id="27" className={cn("btn", {active: activeDays.indexOf(27) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day27}</div>
          </div>
          <div className="col-xs">
          <div id="28" className={cn("btn", {active: activeDays.indexOf(28) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day28}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
          <div id="29" className={cn("btn", {active: activeDays.indexOf(29) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day29}</div>
          </div>
          <div className="col-xs">
          <div id="30" className={cn("btn", {active: activeDays.indexOf(30) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day30}</div>
          </div>
          <div className="col-xs">
          <div id="31" className={cn("btn", {active: activeDays.indexOf(31) > -1})} onClick={this.handleDayChange}>{this.props.translations.Day31}</div>
          </div>
          <div className="col-xs">
          <div id="-1" className={cn("btn", {active: activeDays.indexOf(-1) > -1})} onClick={this.handleDayChange}>{this.props.translations.LastDay}</div>
          </div>
          <div className="col-xs">
          <div></div>
          </div>
          <div className="col-xs">
          <div></div>
          </div>
          <div className="col-xs">
          <div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DayOfMonthPicker;
