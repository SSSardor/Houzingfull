import React, { Component } from "react";
import {
  Container,
  Contact,
  Discover,
  List,
  ListBy,
  Main,
  P,
  Img,
  Span,
  Hr,
  Body,
  House,
  Housing,
  Button,
  Btn,
} from "./style";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Main>
          <Contact>
            Contact Us
            <Img>
              <P style={{ display: "flex" }}>
                <img
                  style={{ width: "18px", height: "18px" }}
                  src="./assents/images/pin.png"
                  alt=""
                />
                <Span>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </Span>
              </P>
            </Img>
            <Img>
              <P style={{ display: "flex" }}>
                <img
                  style={{ width: "18px", height: "18px" }}
                  src="./assents/images/phone.png"
                  alt=""
                />
                <Span> 123 456 7890 </Span>
              </P>
            </Img>
            <Img>
              <P style={{ display: "flex" }}>
                <img
                  style={{ width: "18px", heigth: "18px" }}
                  src="./assents/images/email.png"
                  alt=""
                />
                <Span> support@houzing.com</Span>
              </P>
            </Img>
            <br />
            <br />
            <Img>
              <P>
                <img
                  style={{
                    width: "15px",
                    heigth: "15px",
                    margin: " 0px 40px 0px 0px",
                    fontSize: "14px",
                    lineHeigth: "16px",
                    fontWeight: "400",
                    fontFamily: "Font Awesome 5 Brands",
                    fontStyle: "normal",
                    color: "#FFFFFF",
                  }}
                  src="./assents/images/facebook.png"
                  alt=""
                />
                <img
                  style={{
                    width: "15px",
                    heigth: "15px",
                    margin: " 0px 40px 0px 0px",
                    fontSize: "14px",
                    lineHeigth: "16px",
                    fontWeight: "400",
                    fontFamily: "Font Awesome 5 Brands",
                    fontStyle: "normal",
                    color: "#FFFFFF",
                  }}
                  src="./assents/images/twitter.png"
                  alt=""
                />
                <img
                  style={{
                    width: "15px",
                    heigth: "15px",
                    margin: " 0px 40px 0px 0px",
                    fontSize: "14px",
                    lineHeigth: "16px",
                    fontWeight: "400",
                    fontFamily: "Font Awesome 5 Brands",
                    fontStyle: "normal",
                    color: "#FFFFFF",
                  }}
                  src="./assents/images/instagram.png"
                  alt=""
                />
                <img
                  style={{
                    width: "15px",
                    heigth: "15px",
                    margin: " 0px 40px 0px 0px",
                    fontSize: "14px",
                    lineHeigth: "16px",
                    fontWeight: "400",
                    fontFamily: "Font Awesome 5 Brands",
                    fontStyle: "normal",
                    color: "#FFFFFF",
                  }}
                  src="./assents/images/in.png"
                  alt=""
                />
              </P>
            </Img>
          </Contact>
          <Discover>
            Discover
            <P>Chicago</P>
            <P>Los Angelos</P>
            <P>Miami</P>
            <P>New York</P>
          </Discover>
          <List>
            List by Category
            <P>Apartments</P>
            <P>Condos</P>
            <P>Houses</P>
            <P>Offies</P>
            <P>Retail</P>
            <P>Villas</P>
          </List>
          <ListBy>
            List by Category
            <P>About Us</P>
            <P>Terms Conditions</P>
            <P>Support Center</P>
            <P>Contact Us</P>
          </ListBy>
        </Main>
        <Hr></Hr>
        <Body>
          <House>
            <img
              style={{
                width: "30px",
                height: "36px",
                margin: "20px 0px 0px 60px",
              }}
              src="./assents/images/housing.png"
              alt=""
            />
            <Housing>Housing</Housing>
          </House>
          <Btn>

          <P>Copyright © 2021 CreativeLayers. All Right Reserved</P>
            <Button><img style={{margin:'20px 18px 20px 25px'}} src="./assents/images/btn.png" alt="" /></Button> 
          </Btn>
        </Body>
      </Container>
    );
  }
}
