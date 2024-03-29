import React from "react";
import NavTabs from "../../nav/NavTabs";
import Questions from "../questions/Questions";
import { Row, Container, Col } from "../../grid";
import { optionsState, optionsCounty, startState } from "../../data/data";
import Select from "react-select";
import { RadioGroup, Radio } from "react-radio-group";
var jsonQuery = require('json-query');

class RoadMap extends React.Component {
  state = {
    selectedState: "",
    selectedCounty: ""
  };

  componentDidMount = () => {
    startState.forEach(element => {
      console.log(element);
      const { name, value } = element;
      console.log(name);
      console.log(value);
      this.setState({
        [name]: value
      });
    });
    console.log(this.state);
  };

  handleChangeState = event => {
    console.log(event);

    event == null
      ? this.setState({ selectedState: {} })
      : this.setState({ selectedState: event });
    console.log(`State selected:`, this.state.selectedState);
  };

  handleChangeCounty = event => {
    event == null
      ? this.setState({ selectedCounty: {} })
      : this.setState({ selectedCounty: event });
    console.log(`County selected:`, this.state.selectedCounty);
  };

  handleChange = event => {
    console.log(event);
    const { name, value } = event;
    this.setState({
      [name]: value
    });

  var result=  jsonQuery('NC[value=49].label', {
      data: optionsCounty
    });


    // console.log(this.state);
    console.log(result);
  };

  render() {
    const { value } = this.state.selectedState;
    // console.log(value)
    return (
      <div>
        <NavTabs />
        <Container>
          <h1 className="text-center mt-3">RoadMap</h1>
          <form className="mt-4">
            <Row addClasses="row">
              <Col addClasses="col-12 offset-1 mt-4">
                <p>Select Your State and County.</p>
              </Col>

              <Col addClasses="col-xs-6 col-sm-4  offset-1">
                {/* State Selector */}
                <Select
                  className="shadow-sm mt-0"
                  isSearchable={true}
                  isClearable={true}
                  closeMenuOnSelect={true}
                  onChange={this.handleChangeState}
                  options={optionsState}
                  placeholder="Select Your State"
                />
              </Col>

              <Col addClasses="col-xs-6 col-sm-4">
                {/* County Selector */}
                <Select
                  className="shadow-sm mt-0"
                  isDisabled={!value ? true : false} // If State has been selected, enable county selector.
                  isSearchable={true}
                  isClearable={true}
                  onChange={this.handleChangeCounty}
                  options={optionsCounty[value]}
                  placeholder="Select Your County"
                />
              </Col>
            </Row>
            {/* <Row>
            <Col addClasses="col-10 offset-1 mt-3">
                <RadioGroup
                  name="provider"
                  onChange={this.handleChange}
                >
                <p>Are you a Service Provider?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "provider" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "provider" }}
                    />
                    No
                  </label>
                </RadioGroup>
             </Col>
             {this.state.provider === true ? <Questions></Questions> : ""  }
          </Row>  */}
            <Row>
              <Col addClasses="col-10 offset-1 mt-3">
                <RadioGroup name="id" onChange={this.handleChange}>
                  <p>Do you need an Id?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "id" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "id" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>
            {this.state.id === true ? <Questions></Questions> : ""}{" "}
            {/*Add'l questions appears when ternary is true */}
            {/* <Row>
          <Col addClasses="col-10 offset-1 mt-0">
                <RadioGroup
                  name="resident"
                  onChange={this.handleChange}
                >
                <p>Are you a Returning Resident?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "resident" }}
                      
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "resident" }}
                    />
                    No
                  </label>
                </RadioGroup>
             </Col>
             </Row> */}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="housing" onChange={this.handleChange}>
                  <p>Do you need housing?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "housing" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "housing" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.housing === true ? <Questions></Questions> : ""}              {/*Add'l questions appears when ternary is true */}

            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="employment" onChange={this.handleChange}>
                  <p>Do you need employment?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "employment" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "employment" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.employment === true ? <Questions></Questions> : ""}             {/*Add'l questions appears when ternary is true */}

            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="transport" onChange={this.handleChange}>
                  <p>Do you need help with transportation?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "transport" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "transport" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>
            
            {this.state.transport === true ? <Questions></Questions> : ""}             {/*Add'l questions appears when ternary is true */}

            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="food" onChange={this.handleChange}>
                  <p>Do you need help with food security?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "food" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "food" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.food === true ? <Questions></Questions> : ""}             {/*Add'l questions appears when ternary is true */}

            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="health" onChange={this.handleChange}>
                  <p>
                    Do you have health concerns (physical, mental or substance
                    abuse)?
                  </p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "health" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "health" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.health === true ? <Questions></Questions> : ""}             {/*Add'l questions appears when ternary is true */}

            {/* <Row>
            <Col addClasses="col-12 offset-1">
                <RadioGroup
                  name="business"
                  onChange={this.handleChange}
                >
                <p>Do you want to start a business?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "business" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "business" }}
                    />
                    No
                  </label>
                </RadioGroup>
            </Col>
          </Row> */}
            {/* <Row>
            <Col addClasses="col-12 offset-1">
                <RadioGroup
                  name="finance"
                  onChange={this.handleChange}
                >
              <p>Do you need financial literacy?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "finance" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "finance" }}
                    />
                    No
                  </label>
                </RadioGroup>
            </Col>
          </Row> */}
            {/* <Row>
            <Col addClasses="col-10 offset-1">
                <RadioGroup
                  name="mentoring"
                  onChange={this.handleChange}
                >
              <p>Do you need mentoring?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "mentor" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "mentor" }}
                    />
                    No
                  </label>
                </RadioGroup>  
            </Col>
          </Row> */}
          </form>
        </Container>
      </div>
    );
  }
}

export default RoadMap;
