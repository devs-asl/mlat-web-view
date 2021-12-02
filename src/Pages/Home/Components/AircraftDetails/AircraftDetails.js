import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./AircraftDetails.css";
const AircraftDetails = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <section className="flight-details">
        <div className="flight-details__modal">
          <div className="flight-details__modal--image">
            <span className="flight-details__modal--image__button">
              <button onClick={onClose} className="btn-close" />
            </span>
            <img src="/Images/qatar-airways-bg.jpg" alt="Aircraft"/>
            <div className="flight-details__modal--image__after-bg-image">
              <div className="row">
                <div class="col d-flex justify-content-center">
                  <div className="col flight-details__modal--image__after-bg-image__column">
                    <div className="flight-details__modal--image__after-bg-image-logo">
                      <img src="/Images/qatar-airways-logo.png" alt="Aircraft" />
                    </div>
                  </div>

                  <div className="col flight-details__modal--image__after-bg-image__column">
                    <div className="flight-details__modal--image__after-bg-image-logo">
                      <p>Flight No.</p>
                      <span>QR634</span>
                    </div>
                  </div>

                  <div className="col flight-details__modal--image__after-bg-image__column">
                    <div className="flight-details__modal--image__after-bg-image-logo">
                      <p>Callsign</p>
                      <span>CTR634</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flight-details__modal--body"></div>
          </div>

          <div
            className="flight-details__modal__boby-content"
            style={{
              maxHeight: "calc(100vh - 210px)",
              overflowY: "auto",
            }}
          >
            <div className="flight-details__modal__boby-content--inside-content">
              <div className="row">
                <div className="col flight-details__modal__boby-content--inside-content__doh">
                  <small>Doha</small>
                  <h2>DOH</h2>
                  <small className="col flight-details__modal__boby-content--inside-content__doh--time">
                    +3 (UTC +03:00)
                  </small>
                </div>

                <div className="col flight-details__modal__boby-content--inside-content__doh">
                  <img src="/Images/departure.svg" alt="Aircraft" />
                </div>

                <div className="col flight-details__modal__boby-content--inside-content__dac">
                  <small>Dhaka</small>
                  <h2>DAC</h2>
                  <small className="col flight-details__modal__boby-content--inside-content__dac--time">
                    +3 (UTC +03:00)
                  </small>
                </div>
              </div>
            </div>
            <div className="flight-details__modal__boby-content--table">
              <table>
                <tr>
                  <td>
                    Scheduled{" "}
                    <span>
                      8:50<small>pm</small>
                    </span>
                  </td>
                  <td>
                    Scheduled{" "}
                    <span>
                      8:50<small>pm</small>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Scheduled{" "}
                    <span>
                      8:50<small>pm</small>
                    </span>
                  </td>
                  <td>
                    Scheduled{" "}
                    <span>
                      8:50<small>pm</small>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="flight-details__Accordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <img src="/Images/more-flight-info-icon.svg" alt="Aircraft" />
                    More QR634 information
                  </Accordion.Header>
                  <Accordion.Body className="body">
                    <div className="flight-details__Accordion__more-info">
                      <div className="flight-details__Accordion--more-info-inside">
                        <img src="/Images/aircraft-type.svg" alt="Aircraft"/>
                      </div>
                      <div className="flight-details__Accordion__more-info__type">
                        <table>
                          <tr className="flight-details__Accordion__more-info__type--table">
                            <td>
                              AIRCRFT TYPE (A333)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small1">
                                Airbus A330-302
                              </small>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              REGISTRATION
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                A7-AED
                              </small>
                            </td>
                            <td>
                              COUNTRY OF REG.
                              <div className="flight-details__Accordion__more-info__type--color"></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              SERIAL NUMBER (MSN)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                0680
                              </small>
                            </td>
                            <td>
                              AGE (JUL 2005)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                16 years
                              </small>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <img src="/Images/more-flight-info-icon.svg" alt="Aircraft" />
                    More QR634 information
                  </Accordion.Header>
                  <Accordion.Body className="body">
                    <div className="flight-details__Accordion__more-info">
                      <div className="flight-details__Accordion--more-info-inside">
                        <img src="/Images/aircraft-type.svg" alt="Aircraft" />
                      </div>
                      <div className="flight-details__Accordion__more-info__type">
                        <table>
                          <tr className="flight-details__Accordion__more-info__type--table">
                            <td>
                              AIRCRFT TYPE (A333)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small1">
                                Airbus A330-302
                              </small>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              REGISTRATION
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                A7-AED
                              </small>
                            </td>
                            <td>
                              COUNTRY OF REG.
                              <div className="flight-details__Accordion__more-info__type--color"></div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              SERIAL NUMBER (MSN)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                0680
                              </small>
                            </td>
                            <td>
                              AGE (JUL 2005)
                              <br />
                              <small className="flight-details__Accordion__more-info__type--small2">
                                16 years
                              </small>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="flight-details__modal--footer">
            <div className="flight-details__modal--footer__inside">
              <div className="flight-details__modal--footer__inside--image">
                <img src="/Images/flight-details-footer-icon-1.svg" alt="Aircraft" />
                <br />
                <small className="flight-details__modal--footer__inside--image--content">
                  3D view
                </small>
              </div>

              <div className="flight-details__modal--footer__inside--image">
                <img
                  src="/Images/flight-details-footer-icon-2.svg"
                  className="flight-details__modal--footer__inside--image__change" alt="Aircraft"
                />
                <br />
                <small className="flight-details__modal--footer__inside--image--content">
                  Route
                </small>
              </div>

              <div className="flight-details__modal--footer__inside--image">
                <img
                  src="/Images/flight-details-footer-icon-3.svg"
                  className="flight-details__modal--footer__inside--image__change1" alt="Aircraft"
                />
                <br />
                <small className="flight-details__modal--footer__inside--image--content">
                  Follow
                </small>
              </div>

              <div className="flight-details__modal--footer__inside--image">
                <img src="/Images/flight-details-footer-icon-4.svg" alt="Aircraft" />
                <br />
                <small className="flight-details__modal--footer__inside--image--content">
                  Share
                </small>
              </div>

              <div className="flight-details__modal--footer__inside--image">
                <img
                  src="/Images/flight-details-footer-icon-5.svg"
                  className="flight-details__modal--footer__inside--image__change2" alt="Aircraft"
                />
                <br />
                <small className="flight-details__modal--footer__inside--image--content2">
                  More
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircraftDetails;
