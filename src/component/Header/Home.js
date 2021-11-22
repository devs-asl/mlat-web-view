import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaUsers } from "react-icons/fa";
import Modalflight from "./Modalflight";

const Apps = () => {
  const [show, setShow] = useState(false);

  return (
    // Toggle sidebar
    <div>
      <div className="text-center flight-details">
        <button
          className="btn btn-primary"
          id="flight-details__button"
          onClick={() => setShow(true)}
        >
          Click On Aircrafts
        </button>
      </div>
      <Modalflight show={show} onClose={() => setShow(false)} />

      <section id="Accordions">
        <div className="Accordions__left">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Most tracked flights{" "}
                <div className="Accordion-Header--live">Live</div>
                <p className="Accordion-Header--question">?</p>
              </Accordion.Header>
              <Accordion.Body>
                <div className="Accordion-body__content">
                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      1
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      2
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      3
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                Last Clicked flights{" "}
                <p className="Accordion-Header--question">?</p>
              </Accordion.Header>
              <Accordion.Body>
                <div className="Accordion-body__content">
                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      1
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      2
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      3
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Most tracked flights{" "}
                <div className="Accordion-Header--live">Live</div>
                <p className="Accordion-Header--question">?</p>
              </Accordion.Header>
              <Accordion.Body>
                <div className="Accordion-body__content">
                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      1
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      2
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>

                  <div className="Accordion-body__content--inside">
                    <div className="Accordion-body__content--inside__number">
                      3
                    </div>
                    <span className="Accordion-body__content--inside__content">
                      FR334/RYR7BJ
                    </span>
                    <br />
                    <small className="Accordion-body__content--inside__content-small">
                      Pafos(PFO)-Tallinn(TILL)
                    </small>
                    <div className="Accordion-body__content--inside__icon">
                      540{" "}
                      <FaUsers className="Accordion-body__content--inside__icon--users" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Apps;
