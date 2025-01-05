import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="d-flex  justify-content-between ">
      <div className=" p-2 border border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-1 bg-danger">
        <Link style={{textDecoration:"none",color:"#fff"}} to={"/"} >Home</Link> 
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
        <Link style={{textDecoration:"none",color:"#fff"}} to={"/"} >Satta king{" "}</Link>
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
      <Link style={{textDecoration:"none",color:"#fff"}} to={"/"} >SATTA CHART</Link>  
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
      <Link style={{textDecoration:"none",color:"#fff"}} to={"/"} >SATTA KING 2024</Link>   
      </div>
      <div
        style={{ background: "green" }}
        className=" p-2 border border-white text-uppercase fw-bold fs-6 text-center text-white   w-100 flex-1"
      >
       <Link style={{textDecoration:"none",color:"#fff"}} to={"/"} > SATTA leak</Link> 
      </div>
    </div>
    </>

    
  );
};

export default Header;
