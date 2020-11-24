import React, { Component } from 'react';
// import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
 
class CalenderControl extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        {/* <Calendar
          onChange={this.onChange}
          value={this.state.date}
          locale={"hu-HU"}
        calendarType={"ISO 8601"}
        /> */}
      </div>
    );
  }
}

export default CalenderControl;