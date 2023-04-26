import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: #2F4B5D;
  height: 85px;
  display: flex;
  //justify-content: center;
  //padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #FFF;
  margin: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  &.active{
    color: #009CDC;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;

  @media screen and (max-width: 768px) {
    //display: block;
    //position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  //.spanishLabLogo{
  //  margin-top: 220px;
  //  width: 596px;
  //  height: 970px;
  //  align-content: center;
  //  position: absolute;
  //  bottom: 20%;
  //  left: 32%;
  //  //margin-left: 100px;
  //}
  /* The dropdown container */
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
    
  }

  /* Add a red background color to navbar links on hover */
  .navbar a:hover, .dropdown:hover .dropbtn {
    color: #009CDC;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    font-size: 20px;
    background-color: #2F4B5D;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .leftMenuBar{
    @media screen and (max-width: 600px) {
      position: absolute;
      top: 10%;
      left: 10%;
    }
    position: absolute;
    top: 3%;
    left: 2%;
  }
  .rightLogin{
    position: absolute;
    top: 5%;
    right: 2%;
  }
  .logoDiv{
    position: absolute;
    top: 2%;
    left: 39%;
  }
  

`;

// import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";


// export const Nav = styled.nav`
//   background: #2F4B5D;
//   height: 85px;
//   display: flex;
//   z-index: 12;
// `;

// export const NavLink = styled(Link)`
//   color: #FFF;
//   margin: 10px;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   font-size: 20px;
//   &.active{
//     color: #009CDC;
//   }
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   justify-content: space-between;

//   .dropdown-content {
//     display: none;
//   }

//   .dropdown-content.show {
//     display: block;
//   }

//   @media screen and (max-width: 768px) {
//     .leftMenuBar {
//       display: none;
//     }

//     .dropdown-content.show {
//       display: flex;
//       flex-direction: column;
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: #2F4B5D;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   .dropdown {
//     float: left;
//     overflow: hidden;
//   }

//   .dropdown .dropbtn {
//     font-size: 16px;
//     border: none
//     outline: none;
//     padding: 14px 16px;
//     background-color: inherit;
//     font-family: inherit;
//     margin: 0;
//   }

//   .navbar a:hover, .dropdown:hover .dropbtn {
//     color: #009CDC;
//   }

//   .dropdown-content {
//     display: none;
//     position: absolute;
//     font-size: 20px;
//     background-color: #2F4B5D;
//     min-width: 200px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 1;
//   }

//   .dropdown:hover .dropdown-content {
//     display: block;
//   }

//   .leftMenuBar {
//     position: absolute;
//     top: 3%;
//     left: 2%;
//   }

//   .rightLogin {
//     position: absolute;
//     top: 5%;
//     right: 2%;

//     @media screen and (max-width: 768px) {
//       display: none;
//     }
//   }

//   .logoDiv {
//     position: absolute;
//     top: 2%;
//     left: 39%;

//     @media screen and (max-width: 768px) {
//       top: 15%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//   }
// `;
