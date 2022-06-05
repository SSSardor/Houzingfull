import React, { Component } from "react";
import { home } from "./mock.js";
import "./index.css";
import "./app.css";
// import Body from "./Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Modal from "./Modal/Modal.jsx";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home,
      open: false,
    };
  }

  render() {
    const onFilter = ({ target }) => {
      const { value, name } = target;
      console.log(name, value);
      if (value) {
        let res = home.filter((item) =>
          `${item[name]}`.toLowerCase().includes(`${value}`.toLowerCase())
        );
        this.setState({ home: res });
        console.log(res);
      } else {
        this.setState({ home });
      }
    };
    console.log(this.state.home);
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            padding: "10px",
            margin: "auto",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <img className="home" src="./assents/images/home.png" alt="" />
            <input
              className="input"
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>
          <div
            className="btn_1"
            style={{ display: "flex", borderRadius: "2px" }}
          >
            <div style={{ display: "flex" }}>
              <button
                onClick={() => this.setState({ open: true })}
                className="adven"
              >
                <img
                  style={{ margin: "11px", height: "20px" }}
                  src="./assents/images/advanced.png"
                  alt=""
                />
                <p className="ad_a">Advenced</p>
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button className="search">
                <img
                  style={{ margin: "12px" }}
                  src="./assents/images/lope.png"
                  alt=""
                />
                <p className="se_a">Search</p>
              </button>
            </div>
          </div>
          {this.state.open && (
            <Modal onClose={() => this.setState({ open: false })}>
              <div>
                <h1>Address</h1>
                <input
                  type="text"
                  onChange={onFilter}
                  name="plase"
                  placeholder="Country"
                />
                <input
                  type="text"
                  onChange={onFilter}
                  name="plase"
                  placeholder="Region"
                />
                <input
                  type="text"
                  onChange={onFilter}
                  name="plase"
                  placeholder="City"
                />
                <input
                  type="text"
                  onChange={onFilter}
                  name="plase"
                  placeholder="Zip Code"
                />
              </div>
              <div>
                <h1>Apartment Info</h1>
                <input
                  type="number"
                  onChange={onFilter}
                  name="rooms"
                  placeholder="Rooms"
                />
                <input
                  type="number"
                  onChange={onFilter}
                  name="size"
                  placeholder="Size"
                />
                <input
                  type="number"
                  onChange={onFilter}
                  name="sort"
                  placeholder="Sort"
                />
              </div>
              <div>
                <h1>Price</h1>
                <input
                  type="number"
                  onChange={onFilter}
                  name="prise"
                  placeholder="min_price"
                />
                <input
                  type="number"
                  onChange={onFilter}
                  name="discount"
                  placeholder="max_price"
                />
              </div>
              <hr />
              <div className="div">
                <div className="btn-wrap">
                  <button className="modal_btn">Cancel</button>
                  <button
                    style={{ background: "blue", color: "white" }}
                    className="modal_btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontFamily: "Montserrat",
            lineHeight: "36px",
            fontWeight: "600",
            fontStyle: "normal",
            marginBottom: "0",
            padding: "4px",
          }}
        >
          Proporties
        </h1>
        <h6
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: "400",
            lineHeight: "24px",
            fontStyle: "normal",
            color: "#696969",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h6>
        <div
          className="xxx"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "5.5%",
            paddingRight: "8%",
          }}
        >
          <h6 className="h6">13,474 result</h6>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="p">Sort by:</p>
            <select className="option" name="house" id="house">
              <option value="sort">Newest Listings</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Prise">Where in the place</option>
              <option value="Room">Number of rooms</option>
            </select>
          </div>
        </div>
        <div className="container">
          {this.state.home.map((item, index) => {
            return (
              <div key={index} className="card">
                <div className="pos__a">
                  <img className="img" src={item.img} alt="" />
                  <div className="ellipse">
                    <img src={item.url} alt="" />
                  </div>
                </div>
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <div
                    className="btn"
                    style={{ display: "flex", aliginItem: "center" }}
                  >
                    <button className="btn1">
                      <span className="span">FEATURED</span>
                    </button>
                    <button className="btn2">
                      <span className="span">FOR SALE</span>
                    </button>
                  </div>

                  <h1>{item.name}</h1>
                  <h3>{item.plase}</h3>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        style={{ marginLeft: "14px" }}
                        src="./assents/images/bed.png"
                        alt=""
                      />{" "}
                      <br />
                      <span>4 Beds</span>
                    </div>
                    <div>
                      <img
                        className="baths"
                        style={{ marginLeft: "15px" }}
                        src="./assents/images/baths.png"
                        alt=""
                      />{" "}
                      <br />
                      <span>5 Baths</span>
                    </div>
                    <div>
                      <img
                        style={{ padding: "2px", marginLeft: "18px" }}
                        src="./assents/images/garage.png"
                        alt=""
                      />{" "}
                      <br />
                      <span>1 Garage</span>
                    </div>
                    <div>
                      <img
                        style={{ marginLeft: "25px", padding: "1px" }}
                        src="./assents/images/sq.png"
                        alt=""
                      />{" "}
                      <br />
                      <span>1200 Sq Ft</span>
                    </div>
                  </div>
                </div>{" "}
                <hr />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="prise"
                >
                  <div>
                    <del>{item.discount}</del>
                    <h5>{item.prise}</h5>
                  </div>
                  <div style={{ display: "flax", alignItems: "center" }}>
                    <img
                      className="love"
                      src="./assents/images/resize.png"
                      alt=""
                    />
                    <img
                      style={{ marginLeft: "15px" }}
                      src="./assents/images/love.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button className="show_more">Show More</button>
        </div>
        <Footer />
      </div>
    );
  }
}
