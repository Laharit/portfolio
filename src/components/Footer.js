import { Container, Row, Col } from "react-bootstrap";
import navIconLinkedIn from "../assets/img/nav-iconlinked.svg";
import navIconInsta from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon p-3 items-center justify-center">
              <p>LAHARI</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/lahari-thummanapally/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconLinkedIn} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/t_lahari_22?igsh=MTkzbGRpaWJwdno3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconInsta} alt="Icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
