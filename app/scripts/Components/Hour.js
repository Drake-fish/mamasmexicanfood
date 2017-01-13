import React from 'react';

export default React.createClass({
  render(){
    return(
      <div className="story-box">
        <div className="info-break">
        </div>
        <h4 className="info-title">Hours</h4>
        <ul>
          <li className="hours"><span className="day">Monday</span><span className="time">11am-1pm</span></li>
          <li  className="hours"><span className="day">Tuesday</span><span className="time">11am-1pm</span></li>
          <li className="hours"><span className="day">Wedndesday</span><span className="time">11am-1pm</span></li>
          <li className="hours"><span className="day">Thursday</span><span className="time">11am-1pm</span></li>
          <li className="hours"><span className="day">Friday</span><span className="time">11am-1pm</span></li>
          <li className="hours"><span className="day">Saturday</span><span className="time">11am-1pm</span></li>
          <li className="hours"><span className="day">Sunday</span><span className="time">11am-1pm</span></li>
        </ul>
        <h4 className="specials">Call for Daily Specials!</h4>
        <span className="phone">555-555-5555</span>
      </div>
    );
  }
});
