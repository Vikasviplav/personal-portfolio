import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <br/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vikas-viplav-726841203/"><img src={navIcon1} alt="" /></a>
              <a href="https://leetcode.com/u/vikas_viplav/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.hackerrank.com/profile/vikashvipplav"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Made with love by vikas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
