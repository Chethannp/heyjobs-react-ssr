//React Imports
import React, { useState } from "react";

//Redux Imports
import { connect } from "react-redux";

//Styled Components
import {
  Anchor,
  Deck,
  DeckInline,
  Svg,
  InlineBlock,
  Button,
  Fade
} from "../../styled-components/DeckStyle";
import {
  SearchBar,
  InputSearchBox,
  SubmitButton
} from "../../styled-components/SearchBarStyle";

//Icons
import locationIcon from "../../assets/svg/location-icon.svg";
import experienceIcon from "../../assets/svg/experience-icon.svg";
import currencyIcon from "../../assets/svg/currency-icon.svg";
import searchIcon from "../../assets/svg/search-icon.svg";

const ListBlockComp = props => {
  const [search, setSearch] = useState("");

  const onChange = e => {
    setSearch(e.target.value);
  };

  let filteredJobs = props.jobsList.filter(
    job => job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <div>
      <SearchBar>
        <InputSearchBox
          aria-label="jobSearch"
          autoComplete="off"
          type="text"
          id="jobSearch"
          name="search"
          placeholder="Search for Jobs..."
          onChange={e => onChange(e)}
          defaultValue={search}
        />
        <SubmitButton>
          <img src={searchIcon} alt="search icon" height="10" />
        </SubmitButton>
      </SearchBar>

      {filteredJobs && filteredJobs.length == 0 ? (
        <h1>No results found</h1>
      ) : (
        filteredJobs.map(job => (
          <Anchor
            to={job.jobStatus === "no vacancy" ? `` : `/job/${job.id}`}
            key={job.id}
          >
            <Deck
              style={
                job.jobStatus === "no vacancy"
                  ? { opacity: ".6" }
                  : { opacity: "1" }
              }
            >
              {job.jobStatus === "no vacancy" && (
                <h6 style={{ textAlign: "center", color: "red" }}>
                  ~ Sorry, this vacancy is now closed ~
                </h6>
              )}
              {(job.title || job.isPromoted) && (
                <DeckInline>
                  {job.title && <h2>{job.title}</h2>}
                  {job.isPromoted && <h5>Promoted</h5>}
                </DeckInline>
              )}

              {job.company && <h3>{job.company}</h3>}

              {(job.location || job.experienceLevel || job.salaryRange) && (
                <ul>
                  {job.location && (
                    <li>
                      <Svg src={locationIcon} alt="location icon" />
                      {job.location}
                    </li>
                  )}
                  {job.experienceLevel && (
                    <li>
                      <Svg src={experienceIcon} alt="experience icon" />
                      {job.experienceLevel}
                    </li>
                  )}

                  {job.salaryRange && (
                    <li>
                      <Svg src={currencyIcon} alt="currency icon" />
                      {job.salaryRange}
                    </li>
                  )}
                </ul>
              )}

              {job.description && <Fade>{job.description}</Fade>}

              {job.skills && (
                <h4>
                  <span>Skills:</span>
                  {job.skills.map(skill => (
                    <InlineBlock key={skill}>{skill}</InlineBlock>
                  ))}
                </h4>
              )}

              <DeckInline>
                {job.timeOfPost && (
                  <h6>
                    <span>Posted: </span> {job.timeOfPost}
                  </h6>
                )}
                {job.jobStatus && <Button>{job.jobStatus}</Button>}
              </DeckInline>
            </Deck>
          </Anchor>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobsList: state.jobs.jobsList
  };
};

export default connect(mapStateToProps)(ListBlockComp);
