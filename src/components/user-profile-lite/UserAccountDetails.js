import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  Modal, ModalBody, ModalHeader
} from "shards-react";
class UserAccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  saveValue = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Account Details</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form>
                    <Row form>
                      {/* First Name */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feFirstName">First Name</label>
                        <FormInput
                          id="feFirstName"
                          placeholder="First Name"
                          // value="Sierra"
                          onChange={() => { }}
                        />
                      </Col>
                      {/* Last Name */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feLastName">Last Name</label>
                        <FormInput
                          id="feLastName"
                          placeholder="Last Name"
                          // value="Brooks"
                          onChange={() => { }}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Email */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feEmail">Email</label>
                        <FormInput
                          type="email"
                          id="feEmail"
                          placeholder="Email Address"
                          // value="sierra@example.com"
                          onChange={() => { }}
                          autoComplete="email"
                        />
                      </Col>
                      {/* Password */}
                      <Col md="6" className="form-group">
                        <label htmlFor="fePassword">Password</label>
                        <FormInput
                          type="password"
                          id="fePassword"
                          placeholder="Password"
                          // value="EX@MPL#P@$$w0RD"
                          onChange={() => { }}
                          autoComplete="current-password"
                        />
                      </Col>
                    </Row>
                    <FormGroup>
                      <label htmlFor="feAddress">Address</label>
                      <FormInput
                        id="feAddress"
                        placeholder="Address"
                        // value="1234 Main St."
                        onChange={() => { }}
                      />
                    </FormGroup>
                    <Row form>
                      {/* City */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feCity">City</label>
                        <FormInput
                          id="feCity"
                          placeholder="City"
                          onChange={() => { }}
                        />
                      </Col>
                      {/* State */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feInputState">State</label>
                        <FormSelect id="feInputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </FormSelect>
                      </Col>
                      {/* Zip Code */}
                      <Col md="2" className="form-group">
                        <label htmlFor="feZipCode">Zip</label>
                        <FormInput
                          id="feZipCode"
                          placeholder="Zip"
                          onChange={() => { }}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Description */}
                      <Col md="12" className="form-group">
                        <label htmlFor="feDescription">Description</label>
                        <FormTextarea id="feDescription" rows="5" />
                      </Col>
                    </Row>
                    <Button theme="accent"
                      onClick={() => this.saveValue()}
                    >Update Account</Button>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Modal open={open} toggle={this.saveValue}>
          <ModalHeader>Notification</ModalHeader>
          <ModalBody>Chức năng đang được cập nhật</ModalBody>
        </Modal>
      </div>
    )
  }
}

export default UserAccountDetails;
