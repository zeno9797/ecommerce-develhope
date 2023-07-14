import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-danger text-white">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/" className="me-4 link-secondary text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="me-3 text-secondary"
                  />
                  WeGaming
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Action
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Open World
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    First-person shooter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sports
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon
                    icon={faHome}
                    className="me-3 text-secondary"
                  />
                  Milano, MI 20121, IT
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-3 text-secondary"
                  />
                  weGaming@example.com
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-3 text-secondary"
                  />
                  + 01 234 567 88
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="me-3 text-secondary"
                  />
                  + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}
      </footer>
    </div>
  );
}
