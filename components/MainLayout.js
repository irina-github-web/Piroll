// import React, { useEffect, useState } from "react";
import Router from "next/router";
import Meta from "./Meta";
import Header from "./headers/Header";
import Header2 from "./headers/Header2";
import Footer from "./Footer";

export function MainLayout({ children, title = "Piroll" }) {
  // useEffect(() => {
  //   let isMain = true;
  //   const { pathname } = Router;
  //   if (pathname == "/") {
  //     isMain = true;
  //   } else {
  //     isMain = false;
  //   }
  // });

  return (
    <>
      <Meta title={title} />

      {/* {isMain ? <Header /> : <Header2 />} */}

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

// import React, { Component } from "react";

// export default class MainLayout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isMain: true };
//   }

//   howHeader = () => {
//     const { href } = Router;

//     if (href == "http://localhost:3000") {
//       this.setState({
//         isMain: true,
//       });
//     } else {
//       this.setState({
//         isMain: false,
//       });
//     }

//     return isMain;
//   };

//   render() {
//     return (
//       <>
//         <Meta title={this.props.title} />

//         {this.howHeader.isMain ? <Header /> : <Header2 />}

//         <main>{this.props.children}</main>

//         <Footer />
//       </>
//     );
//   }
// }
