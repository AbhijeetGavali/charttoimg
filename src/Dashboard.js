// Component provided by digvijay sir


// import React, { useEffect, useState } from "react";
// import "./Dashboard.css";
// import { Link } from "react-router-dom";
// import { Grid } from "material-ui/core/";
// import { Book, People, SupervisedUserCircle } from "material-ui/icons";
// import {
//   CartesianGrid,
//   Legend,
//   Line,
//   LineChart,
//   Tooltip,
//   XAxis,
//   YAxis,
//   BarChart,
//   Bar,
// } from "recharts";

// export default function DashboardHome() {
//   const [products, setproducts] = useState([]);
//   const [category, setcategory] = useState([]);
//   const [order, setorder] = useState([]);
//   const [orderdata, setorderdata] = useState([]);
//   const [loader, setloader] = useState(false);
//   const db = firebase_.firestore();

//   // expected data in below format
//   /* const data = [
//       { name: "a", value: 12 },
//       { name: "b", value: 22 },
//       { name: "c", value: 42 },
//       { name: "d", value: 52 },
//     ]; */
//   useEffect(async () => {
//     await fetchCategoryCount();
//     await fetchOrderCount();
//     await fetchProductCount();
//   }, []);
//   async function fetchCategoryCount() {
//     try {
//       await db
//         .collection("Category")
//         .get()
//         .then((res) => {
//           setcategory(res.size);
//         });
//     } catch (err) {
//       console.log("error in fetching numbers");
//     }
//   }
//   async function fetchOrderCount() {
//     try {
//       await db
//         .collection("Orders")
//         .get()
//         .then(async (res) => {
//           setorder(res.size);
//           // adding data into array in form that graph is expecting
//           const data = await res.docs.map((doc) => ({
//             // uid: doc.data().uid,

//             value: doc.data().total,
//             name: doc.data().timestamp.toDate().toLocaleDateString("en-GB"),

//             ...doc.data,
//           }));
//           //   setLoader(false);
//           setorderdata(data);
//         });
//     } catch (err) {
//       console.log("error in fetching numbers");
//     }
//   }
//   async function fetchProductCount() {
//     try {
//       await db
//         .collection("Products")
//         .get()
//         .then((res) => {
//           setproducts(res.size);
//         });
//     } catch (err) {
//       console.log("error in fetching numbers");
//     }
//   }
//   return (
//     <div className="Admin-Container">
//       <div className="Admin-right_Side">
//         <div className="Right_Side-header">
//           <div className="Right_Side-header-Items">
//             <i id="icons" className="fa fa-envelope">
//               {" "}
//             </i>{" "}
//             <i id="icons" className="fa fa-bell">
//               {" "}
//             </i>{" "}
//           </div>{" "}
//         </div>
//         <Grid container spacing="2">
//           <Grid item sm={4}>
//             <div className="db-numeric-section1">
//               <People fontSize="large" style={{ marginLeft: "5%" }} />{" "}
//               <div>
//                 <h2> Products {products} </h2>{" "}
//                 <a href="/admin/stock"> View More </a>{" "}
//               </div>{" "}
//             </div>{" "}
//           </Grid>{" "}
//           <Grid item sm={4}>
//             <div className="db-numeric-section1">
//               <SupervisedUserCircle
//                 fontSize="large"
//                 style={{ marginLeft: "5%" }}
//               />{" "}
//               <div>
//                 <h2> Categories {category} </h2>{" "}
//                 <a href="/admin/category"> View More </a>{" "}
//               </div>{" "}
//             </div>{" "}
//           </Grid>{" "}
//           <Grid item sm={4}>
//             <div className="db-numeric-section3">
//               <Book fontSize="large" style={{ marginLeft: "5%" }} />{" "}
//               <div>
//                 <h2> Orders {order} </h2> <a href="/admin/order"> View More </a>{" "}
//               </div>{" "}
//             </div>{" "}
//           </Grid>{" "}
//         </Grid>{" "}
//       </div>{" "}
//       <div className="graph-section">
//         <Grid container spacing={1}>
//           <Grid item sm={6} xs={12}>
//             <BarChart width={730} height={250} data={orderdata}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="value" fill="#82ca9d" />{" "}
//               {/* <Bar dataKey="uv" fill="#82ca9d" /> */}{" "}
//             </BarChart>{" "}
//           </Grid>{" "}
//           <Grid item sm={6} xs={12}>
//             {" "}
//             {/* <BarChart width={730} height={250} data={orderdata}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="name" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Bar dataKey="value" fill="#82ca9d" />
//                         </BarChart> */}{" "}
//           </Grid>{" "}
//         </Grid>{" "}
//       </div>{" "}
//     </div>
//   );
// }