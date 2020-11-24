import React, { Component } from 'react';
import SearchField from "react-search-field";
import CalenderControl from './Components/CalenderControl/CalenderControl';
import DateRangePickerControl  from './Components/DateRangePickerControl/DateRangePickerControl'



class Trade extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  onChange=()=>
 {
   alert("Hi")
 };
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>Trade ID : </td>
            <td>
            <SearchField
            placeholder="Search..."
            onChange={this.onChange}
            searchText=""
            classNames="test-class"
           />
            </td>
            <td> From Date : </td>
            <td>  <div>
                <CalenderControl />
              </div>
              
              </td>
            <td>To Date :</td>
            <td> 
              <div>
                <CalenderControl />
              </div>
            </td>
            <td> 
              <div>
                <DateRangePickerControl />
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Trade;