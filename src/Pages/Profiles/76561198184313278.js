import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./Profile.css";

class Profiles extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Ideas - Snooze</title>
        </Helmet>
        <Tabs>
          <TabList className="stats__tabs">
            <Tab className="tab">Satistiques</Tab>
            <Tab className="tab">Friends</Tab>
            <Tab className="tab">Title 3</Tab>
            <Tab className="tab">Title 4</Tab>
            <Tab className="tab">Title 5</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

export default Profiles;
