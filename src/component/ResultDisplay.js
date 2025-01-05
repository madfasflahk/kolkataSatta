

import React from 'react';
import './ResultDisplay.css';
import { useGlobalSkills } from '../context/skillContext';
import Loader from './Loader/Loader';

const ResultDisplay = ({ data }) => {
  const {isLoading}=useGlobalSkills()
  const formatNumber = (number) => {
    if (number !== null) {
        const parsedNumber = parseInt(number);
        if (parsedNumber==='NaN') {
          console.log(number);
          console.log('number');
        }
        return parsedNumber.toString().padStart(2, '0');
    }
    return "";
};
  if (isLoading) {
    return <div>
      <Loader/>
    </div>

  }
  return (
    <div   className="w-100 MainTableShow">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '80px', width: '8%' ,color:'white'}}>Date</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '190px', width: '12%',color:'white' }}>DELHI LUCKY BAZAR</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '100px', width: '10%',color:'white' }}>DISAWER</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '120px', width: '10%' ,color:'white'}}>FARIDABAD</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '120px', width: '15%',color:'white' }}>GAZIYABAD</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '150px', width: '15%',color:'white' }}>KOLKATA KING</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '70px', width: '10%' ,color:'white'}}>GALI</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '135px', width: '10%',color:'white' }}>DELHI BAZAR</th>
              <th className="text-center border border-dark px-3" style={{ background: 'brown', padding: '5px 0', minWidth: '170px', width: '15%' ,color:'white'}}>SHREE GANESH</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.resultList &&
              data.resultList.sort((a, b) => a.day - b.day).map((e, i) => (
                <tr key={i}>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '80px', width: '8%', backgroundColor: 'green' }}>
                  <span>{e.day.toString().padStart(2, '0')}</span>
                  <span style={{ marginLeft: '20px' }}>{data.month.toString().padStart(2, '0')}</span>
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '190px', width: '12%' }}>
                    {formatNumber(e.delhiLuckyBazar)==="NaN"?" ":formatNumber(e.delhiLuckyBazar)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '100px', width: '10%' }}>
                    {formatNumber(e.disawer)==="NaN"?" ":formatNumber(e.disawer)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '120px', width: '10%' }}>
                    {formatNumber(e.faridabad)==="NaN"?" ":formatNumber(e.faridabad)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '120px', width: '15%' }}>
                    {formatNumber(e.gaziyabad)==="NaN"?" ":formatNumber(e.gaziyabad)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '150px', width: '15%' }}>
                    {formatNumber(e.kolkataKing)==="NaN"?" ":formatNumber(e.kolkataKing)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '70px', width: '10%' }}>
                    {formatNumber(e.gali)==="NaN"?" ":formatNumber(e.gali)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '135px', width: '10%' }}>
                    {formatNumber(e.delhiBazar)==="NaN"?" ":formatNumber(e.delhiBazar)}
                </td>
                <td className="text-center border border-dark px-3" style={{ padding: '5px 0', minWidth: '170px', width: '15%' }}>
                    {formatNumber(e.shreeGanesh)==="NaN"?" ":formatNumber(e.shreeGanesh)}
                </td>
               
              </tr>
              
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultDisplay;


// import React from 'react'
// import "./ResultDisplay.css"
// const ResultDisplay = ({data}) => {

//   console.log("data",data);
//   return (
//     <>

//     <div style={{ padding: "0 2px" }} className=" w-100 MainTableShow" >
//         <ul className="d-flex list-unstyled text-white  justify-content-center gap-0 m-0 p-0  ">
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "80px", width: "8%" }}  >Date</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "190px", width: "12%" }} >DELHI LUCKY BAZAR</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "100px", width: "10%" }} >DISAWER</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "120px", width: "10%" }} >FARIDABAD</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "120px", width: "15%" }} >GAZIYABAD</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "150px", width: "15%" }} >KOLKATA KING</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "70px", width: "10%" }} >GALI</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "135px", width: "10%" }} >DELHI BAZAR</li>
//           <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "170px", width: "15%" }} >SHREE GANESH</li>
//         </ul>
//         {data && data.resultList && data.resultList.sort((a, b) => a.day - b.day).map((e, i) => {
//           return <ul style={{ color: "var(--primaryText-color)" }} className="d-flex list-unstyled justify-content-center ">
//             <li className="border border-dark px-3 d-flex justify-content-between" style={{ padding: "5px 0", minWidth: "80px", width: "8%", backgroundColor: "green" }}  ><span> {e.day}</span> <span>{(new Date().getMonth()).toString().split(" ").length === 1 ? `0${(new Date().getMonth() + 1).toString()}` : (new Date().getMonth() + 1).toString()}</span>  </li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "190px", width: "12%" }} >{e.delhiLuckyBazar} </li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "100px", width: "10%" }} >{e.disawer}</li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "120px", width: "10%" }} >{e.faridabad} </li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "120px", width: "15%" }} >{e.gaziyabad}</li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "150px", width: "15%" }} >{e.kolkataKing} </li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "70px", width: "10%" }} > {e.gali}</li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "135px", width: "10%" }} > {e.delhiBazar} </li>
//             <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "170px", width: "15%" }} >{e.shreeGanesh} </li>
//           </ul>
//         })}
//       </div>
    
    
//     </>
//   )
// }

// export default ResultDisplay