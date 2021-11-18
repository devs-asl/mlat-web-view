import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Modalflight = ({show, onClose}) => {
  
  if (!show) {
    return null;
  }
    return (
        <div>
            <section className="flight-details">
               <div className="flight-details__modal">
                <div className="flight-details__modal--image">
                <span className="flight-details__modal--image__button">
                <button onClick={onClose} className="btn-close"/>
                </span>
                <img src="/Images/qatar-airways-bg.jpg"/>
                <div className="flight-details__modal--image__after-bg-image">
                  <div className="row">
                  <div class="col d-flex justify-content-center">
                    <div className="col flight-details__modal--image__after-bg-image__column">
                       <div className="flight-details__modal--image__after-bg-image-logo">
                       <img src="/Images/qatar-airways-logo.png"/>
                       </div>
                    </div>

                    <div className="col flight-details__modal--image__after-bg-image__column">
                       <div className="flight-details__modal--image__after-bg-image-logo">
                       <p>Flight No.</p>
                    <span>QR634</span>
                       </div>
                    </div>

                    <div className="col flight-details__modal--image__after-bg-image__column" >
                       <div className="flight-details__modal--image__after-bg-image-logo">
                       <p>Callsign</p>
                    <span>CTR634</span>
                       </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="flight-details__modal--body">
                  
                </div>
               </div>
               <div className="flight-details__modal__boby-content">
                 <div className="flight-details__modal__boby-content--inside-content">
                 <div className="row">
                  <div className="col flight-details__modal__boby-content--inside-content__doh">
                    <small>Doha</small>
                    <h2>DOH</h2>
                    <small className="col flight-details__modal__boby-content--inside-content__doh--time">+3 (UTC +03:00)</small>
                  </div>

                  <div className="col flight-details__modal__boby-content--inside-content__doh">
                  <img src="/Images/departure.svg"/>
                  </div>

                  <div className="col flight-details__modal__boby-content--inside-content__dac">
                    <small>Dhaka</small>
                    <h2>DAC</h2>
                    <small className="col flight-details__modal__boby-content--inside-content__dac--time">+3 (UTC +03:00)</small>
                  </div>
                 </div>
                 </div>
                 <div className="flight-details__modal__boby-content--table">
                 <table>
  
                     <tr>
                      <td>Scheduled <span>8:50<small>pm</small></span></td>
                      <td>Scheduled <span>8:50<small>pm</small></span></td>
                    </tr>
                    <tr>
                      <td>Scheduled <span>8:50<small>pm</small></span></td>
                      <td>Scheduled <span>8:50<small>pm</small></span></td>
                    </tr>
  
                </table>
                 </div>
                 <div className="flight-details__Accordion">
               <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><img src="/Images/more-flight-info-icon.svg"/>More QR634 information</Accordion.Header>
    <Accordion.Body>
      <div className="flight-details__Accordion__more-info">
      <div className="flight-details__Accordion--more-info-inside">
      <img src="/Images/aircraft-type.svg"/>
        </div>
        <div className="flight-details__Accordion__more-info__type">
        <table>
  
  <tr>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Francisco Chaa</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  
</table>
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
               </div>
               </div>

              

               </div>
            </section>
        </div>
    )
}

export default Modalflight;
