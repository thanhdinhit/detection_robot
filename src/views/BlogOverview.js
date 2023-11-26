import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";
import { database } from "../database/firebase";
import { decode_string_firebase } from "../components/func-helper/funcHelper";

class BlogOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getValInFireStore: '',
    };

  }

  getDataFirebase = (path, state) => {
    database.ref(`/${path}`).on('value', (snapshot) => {
      switch (state) {
        case 'getValInFireStore':
          return (
            this.setState({
              getValInFireStore: snapshot.val(),
            })
          )
      }
    });
  }

  componentDidMount() {
    this.getDataFirebase('env-code', 'getValInFireStore');
    // database.ref("/CountDown").on('value', (snapshot) => {
    //   this.setState({
    //     getDateTime: snapshot.val(),
    //   })
    // });
    //database.ref("hello").set('tw12');
    // database.ref().update({hello: 'two'});
  }

  render() {
    const { getValInFireStore } = this.state;
    return (
      <div>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row>
            {/* Users Overview */}
            <Col lg="8" md="12" sm="12" className="mb-4">
              <UsersOverview />
            </Col>

            {/* Users by Device */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <TopReferrals />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BlogOverview;
