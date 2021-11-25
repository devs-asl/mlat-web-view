import React, { useState } from "react";
import { useAircrafts } from "../../Hooks/useAircrafts";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import AircraftDetails from "./Components/AircraftDetails/AircraftDetails";
import SummaryInformation from "./Components/SummaryInformation/SummaryInformation";


const Apps = () => {
    const [show, setShow] = useState(false);
    const {aircrafts} = useAircrafts();

    console.log(aircrafts);

    return (
        <>
            <Header></Header>
            <div className="text-center flight-details">
                <button
                className="btn btn-primary"
                id="flight-details__button"
                onClick={() => setShow(true)}
                >
                Click On Aircrafts
                </button>
            </div>

            <AircraftDetails show={show} onClose={() => setShow(false)} />

            <SummaryInformation></SummaryInformation>
            <Footer></Footer>
        </>
    );
};

export default Apps;
