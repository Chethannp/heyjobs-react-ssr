//React Imports
import React, { Component } from "react";

//Redux Imports
import { connect } from "react-redux";
import {
  DeckDetails,
  Svg,
  InlineBlock,
  Button,
  DeckSepeartor,
  OrderedList,
  Anchor,
  ExpandableContent,
  Breadcrumb
} from "../../styled-components/DeckStyle";

//Fetch Helper
import { fetchPopularJobs } from "../api";

//Action Creators
import { saveFetchedJobList } from "../../thunk-reducer/list/listing.actions";

//Icons
import companyLogo from "../../assets/svg/company-logo.svg";
import locationIcon from "../../assets/svg/location-icon.svg";
import experienceIcon from "../../assets/svg/experience-icon.svg";
import currencyIcon from "../../assets/svg/currency-icon.svg";
import ErrorBlockComp from "./ErrorBlockComp";

class DetailsBlockComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.jobsList ? false : true,
      showError: false,
      showContent: false,
      jobsList: props.jobsList,
      jobInfo: props.jobsList
        ? this.findRightJobDescription(props.jobsList)
        : {}
    };
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  fetchJobs() {
    this.setState(() => ({
      loading: true
    }));

    fetchPopularJobs()
      .then(res => {
        this.props.saveFetchedJobList(res);
        this.setState({
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          showError: true
        });
      });
  }

  findRightJobDescription(jobList) {
    return jobList.find(job => job.id === parseInt(this.props.match.params.id));
  }

  componentDidMount() {
    if (this.state.jobsList) {
      let data = this.findRightJobDescription(this.state.jobsList);

      if (data) {
        this.setState({
          jobInfo: data
        });
      } else {
        this.setState({
          showError: true
        });
      }
    } else {
      this.fetchJobs();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchJobs();
    }
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState(
      {
        showContent: !this.state.showContent
      },
      () => {
        if (!this.state.showContent) {
          document.querySelector("#header").scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    );
  }

  render() {
    const { showError, jobInfo, showContent } = this.state;
    return (
      <div>
        {showError && (
          <ErrorBlockComp
            message="Oops....!,
              <br/> 
              We could not find the job details for this request :(
              <br />
              Sorry for the inconvenience"
            buttonText="Explore Other Jobs"
          />
        )}

        {jobInfo && (
          <React.Fragment>
            <Breadcrumb>
              <Anchor to="/">Home</Anchor> ~> Job Details Page
            </Breadcrumb>
            <DeckDetails>
              {(jobInfo.title || jobInfo.isPromoted) && (
                <DeckSepeartor>
                  <div className="left">
                    {<img src={companyLogo} alt="logo" height="100" />}
                  </div>
                  <div className="right">
                    {jobInfo.company && <h3>{jobInfo.company}</h3>}
                    {jobInfo.title && <h2>{jobInfo.title}</h2>}
                    {jobInfo.skills && (
                      <h4>
                        <span style={{ marginLeft: "0px" }}>Skills:</span>
                        {jobInfo.skills.map(skill => (
                          <InlineBlock key={skill}>{skill}</InlineBlock>
                        ))}
                      </h4>
                    )}
                    {jobInfo.timeOfPost && (
                      <h6>
                        <span>Posted: </span>
                        {jobInfo.timeOfPost}
                      </h6>
                    )}
                    {(jobInfo.location ||
                      jobInfo.experienceLevel ||
                      jobInfo.salaryRange) && (
                      <ul>
                        {jobInfo.location && (
                          <li>
                            <Svg src={locationIcon} alt="location icon" />
                            {jobInfo.location}
                          </li>
                        )}
                        {jobInfo.experienceLevel && (
                          <li>
                            <Svg src={experienceIcon} alt="experience icon" />
                            {jobInfo.experienceLevel}
                          </li>
                        )}

                        {jobInfo.salaryRange && (
                          <li>
                            <Svg src={currencyIcon} alt="currency icon" />
                            {jobInfo.salaryRange}
                          </li>
                        )}
                      </ul>
                    )}
                    {jobInfo.jobStatus && (
                      <Anchor to="/applied">
                        <Button style={{ display: "block" }}>Apply</Button>
                      </Anchor>
                    )}
                  </div>
                </DeckSepeartor>
              )}

              {jobInfo.description && (
                <ExpandableContent>
                  <div
                    className={`${
                      showContent || jobInfo.description.length < 160
                        ? ""
                        : "fade"
                    }`}
                  >
                    <p>{jobInfo.description}</p>

                    {showContent &&
                      (jobInfo.companyInfo &&
                        (jobInfo.companyInfo.whatWeExpect != [] && (
                          <div>
                            <h4>What we Expect</h4>
                            <OrderedList>
                              {jobInfo.companyInfo.whatWeExpect.map(
                                (offer, i) => (
                                  <li key={i * Math.random()}>{offer}</li>
                                )
                              )}
                            </OrderedList>
                          </div>
                        )))}

                    {showContent &&
                      (jobInfo.companyInfo &&
                        (jobInfo.companyInfo.whatWeOffer != [] && (
                          <div>
                            <h4>What we offer</h4>
                            <OrderedList>
                              {jobInfo.companyInfo.whatWeOffer.map(
                                (offer, i) => (
                                  <li key={i * Math.random()}>{offer}</li>
                                )
                              )}
                            </OrderedList>
                          </div>
                        )))}
                  </div>

                  {jobInfo.description.length > 160 && (
                    <Button
                      style={{ display: "block", margin: "0 auto" }}
                      onClick={e => this.toggleContent(e)}
                    >
                      {showContent ? "show less" : "show more"}
                    </Button>
                  )}
                </ExpandableContent>
              )}
            </DeckDetails>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobsList: state.jobs.jobsList
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
    saveFetchedJobList: jobsList => dispatch(saveFetchedJobList(jobsList))
  })
)(DetailsBlockComp);
