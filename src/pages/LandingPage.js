import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { useGlobalSkills } from "../context/skillContext";
import rupeeIcon from './images/rupee.png'
import ServiceAd from "../component/ServiceAd";
import { monthNames } from "../staticData/MonthArray";
import ResultDisplay from "../component/ResultDisplay";
import YearMonthSelector from "../component/YearMonthSelector";
import axios from "axios";
import NoticeBoard from "../component/NoticeBoard";
import SattaImportantNote from "../component/SattaImportantNote";
import { useNavigate } from 'react-router-dom';
import Header from "../component/Header";
import Marquee from "../component/Marque";
import DigitalClock from "../component/DegitalClock";
import Loader from "../component/Loader/Loader";
import HourglassLoader from "../component/Loader/Lodertwo";
const LandingPage = () => {
  const navigate = useNavigate();

  const { isLoading, freeAd, currentMonthChart, currentDayChart, updatedAdArray, importantFact, alterNative } = useGlobalSkills();
  const [resultLoad, setResultLoad] = useState(false)

  const [searchDate, setSearchDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1.
  })


  const handleDateChange = async (year, month) => {


    setSearchDate((prev) => ({
      ...prev,
      year: year,
      month: month
    }));
    setResultLoad(true)
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}result?year=${year}&month=${month}`)
      if (res.status === 200) {
        setResultLoad(false)
        updatedAdArray(res.data, 'CHART_CURRENT_MONTH')
      }
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    handleDateChange(new Date().getFullYear(), new Date().getMonth() + 1)
  }, [])


  const formatNumber = (number) => {
    if (number !== null) {
      const parsedNumber = parseInt(number);
      if (parsedNumber === 'NaN') {
        console.log(number);
        console.log('number');
      }
      return parsedNumber.toString().padStart(2, '0');
    }
    return "";
  }

  const [years, setYears] = useState(new Date().getFullYear().toString());

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };


  if (isLoading) {
    return <div>
      <Loader />
    </div>

  }
  return (
    <>
      <Header />
      <Marquee />
      <div className="firstSection py-4 border border border-white rounded">
        <h3 className="text-center text-yellow">LEAK JODI DHAMAKA</h3>
        <h5 className="text-center text-yellow">
          DLB FB GAZYIABAD KOLKATA KING GALI DISAWER
          <h3 className="text-center text-yellow">Mr. RAHUL KING  <br /> <span className="text-white">7830972958</span>  </h3>
        </h5>
      </div>
      <ul className="secondSection list-unstyled d-flex justify-content-center py-2 rounded border my-1 border-white ">
        <li className="px-3 border-end border-dark border-2 fw-bold"> SattaKing  </li>
        <li className="px-3 border-end border-dark border-2 fw-bold"> Satta King Result  </li>
        <li className="px-3 fw-bold"> Satta Record Chart  </li>
      </ul>

      {/* free ad loop */}
      {freeAd && freeAd.map((e, i) => {
        return <div key={e._id} className="border border-info border-3 rounded rounded-2 py-3 mx-1 ">
          <div className="col-md-7 d-flex align-items-center flex-column  m-auto gap-1">

            <h6 className="text-center fw-bold"> <img style={{ width: "18px", height: "18px", mixBlendMode: "darken" }} src={rupeeIcon} alt="rupeeIcon" />  {e.title && e.title} <img style={{ width: "18px", height: "18px" }} src={rupeeIcon} alt="rupeeIcon" />  </h6>
            <p className="text-center fw-bold">
              {e.content && e.content}
            </p>
            <p className="text-center fw-bold fs-4 m-0 p-0">
              {e.aboutFees && e.aboutFees}
            </p>
            <p className="text-center fw-bold fs-4 m-0 p-0">
              {e.name && e.name}
            </p>
          </div>


        </div>
      })}
      <ServiceAd />

      <div className="sattaKingSite d-flex flex-column align-items-center py-3 mt-3 ">
        <h4 className="text-white">  SATTA-KING-FIXED-NO.IN </h4>
        <ul className="m-auto d-flex list-unstyled">
          <li className="text-white fw-bold border-end border-white px-2">
            SATTA KING
          </li>
          <li className="text-white fw-bold border-end border-white px-2">
            SATTA RESULT
          </li>
          <li className="text-white fw-bold px-2">
            SATTA RECORD
          </li>
        </ul>

      </div>
      <div className="currentMOnthState overflow-scroll">
        <h3 style={{ color: "brown", fontWeight: "bolder", fontSize: "42px" }} className="text-center"> {new Date().getDate()} {" "}{" "}  {monthNames[new Date().getMonth()]} {" "}{" "}  {new Date().getFullYear()} {" "}{" "}</h3>
        <DigitalClock />
        <p className="fw-bold text-center fs-5" > Satte King Live Result Today</p>
        {currentDayChart && (
          <div>
            <div>
              {currentDayChart.result && (
                <>
                  {currentDayChart.result.delhiLuckyBazar !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">DELHI LUCKY BAZAR</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.delhiLuckyBazar)}</p>
                    </>
                  )}

                  {currentDayChart.result.disawer !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">DISAWER</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.disawer)}</p>
                    </>
                  )}

                  {currentDayChart.result.faridabad !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">FARIDABAD</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.faridabad)}</p>
                    </>
                  )}

                  {currentDayChart.result.gaziyabad !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">GAZIYABAD</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.gaziyabad)}</p>
                    </>
                  )}

                  {currentDayChart.result.kolkataKing !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">KOLKATA KING</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.kolkataKing)}</p>
                    </>
                  )}

                  {currentDayChart.result.gali !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">GALI</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.gali)}</p>
                    </>
                  )}

                  {currentDayChart.result.delhiBazar !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">DELHI BAZAR</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.delhiBazar)}</p>
                    </>
                  )}

                  {currentDayChart.result.shreeGanesh !== null && (
                    <>
                      <p style={{ color: "red" }} className="text-center fw-bold fs-1">SHREE GANESH</p>
                      <p style={{ color: "green" }} className="text-center fw-bold fs-1">{formatNumber(currentDayChart.result.shreeGanesh)}</p>
                    </>
                  )}
                </>
              )}
            </div>

          </div>
        )}
      </div>





      {/* -------------Table------------------------- */}


      <div style={{ background: "yellow" }} className="d-flex justify-content-center py-2 gap-2 align-items-center"> <h4 className="text-center m-0 p-0 text-uppercase">SATTA KING {monthNames[parseInt(searchDate.month) - 1]} RECORD CHART {searchDate.year}</h4>  <YearMonthSelector onDateChange={handleDateChange} />  </div>

      {resultLoad ? <div style={{ height: "200px" }} className="d-flex justify-content-center align-items-center "><HourglassLoader /> </div> : <ResultDisplay data={currentMonthChart} />}





      <div className="col-md-6 m-auto" >
        <ul className="list-unstyled fw-bold fs-5 d-flex flex-column gap-2 my-5">
          <li style={{ cursor: "pointer" }} className="border  shadow border-4 text-center  " onClick={() => navigate("/2024")}> SATTA KING RECORD CHART 2024  </li>
          <li style={{ cursor: "pointer" }} className="border  shadow border-4 text-center  " onClick={() => navigate("/2023")}> SATTA KING RECORD CHART 2023  </li>
          <li style={{ cursor: "pointer" }} className="border   shadow border-4 text-center  " onClick={() => navigate("/2022")} > SATTA KING RECORD CHART 2022  </li>
          <span style={{ cursor: "pointer" }} className="border d-flex justify-content-center  shadow border-4 text-center  " > SATTA KING RECORD CHART <input
            type="number"


            value={years}
            className="border-0 bg-transparent fw-bold px-3"
            onChange={handleYearChange}
            min="1900" // Adjust min and max year as needed
            max="2100"
          />
            <button className="btn shadow fw-bold fs-6" onClick={() => navigate(`/${years}`)}  > Go <img src={require("./images/icons8-arrow-24 (1).png")} alt="" /> </button>


          </span>
        </ul>


      </div>

      <NoticeBoard />
      <div className="d-fexx justify-content-center m-auto col-md-6 my-5">

        <SattaImportantNote />
      </div>






      <div style={{ margin: "0 1px", border: "4px solid blue" }} className="rounded  p-4 d-flex justify-content-center my-5"   >
        <div className="col-md-12">

          <div className="col-md-12 m-auto">
            <h3 className=" mb-2 ">Important Facts about Satta King game? </h3>
            <hr />

            <p className=" fs-4 fw-bold my-4">Satta king game is a popular gambling game, that originated in India. Here are some
              important aspects of this game.</p>
            <ul className=" px-4 col-md-12 fw-bold m-auto d-flex flex-column gap-3 ">
              {importantFact && importantFact.map((e, i) => {
                return <li key={e._id} className=""> {e.importantFactSatta} </li>
              })}
            </ul>
          </div>
        </div>

      </div>


      <div style={{ margin: "0 1px", border: "4px solid blue" }} className="rounded p-4 d-flex justify-content-center my-5"   >
        <div className="">

          <div className="col-md-12 m-auto">
            <h3 className=" mb-2 ">Alternative Of Satta King? </h3>
            <hr />

            <p className=" fs-4 fw-bold my-4">Today Satta King's popularity is increasing among people due to the opportunity to earn
              more money in less time and not only Satta King but also many other online games whose
              number of players is increasing day by day. here are some alternatives for Satta King:</p>
            <ul className=" px-4 col-md-12 fw-bold m-auto d-flex flex-column gap-3 ">
              {alterNative && alterNative.map((e, i) => {
                return <li key={e._id} className=""> {e.alternative} </li>
              })}
            </ul>
          </div>
        </div>

      </div>






    </>
  );
};

export default LandingPage;
