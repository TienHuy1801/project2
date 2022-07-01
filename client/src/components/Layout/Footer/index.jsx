import React from "react";
import { Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return(
    <div className={style.footer}>
      <Container>
        <Row className={style.navbar}>
          <Nav vertical>
            <NavItem className={style.item}>
              <span style={{fontWeight:'bold'}}>TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI</span>
            </NavItem>
            <NavItem className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faMapMarkerAlt}></FontAwesomeIcon>
              <span>Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
            </NavItem>
            <NavItem className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faPhoneAlt}></FontAwesomeIcon>
              <span>(+84) xxx</span>
            </NavItem>
            <NavItem className={style.item}>
              <NavLink className={style.link} href="https://www.facebook.com/doitinhnguyen.soict">
                <FontAwesomeIcon className={style.icon} icon={faFacebook}></FontAwesomeIcon>
                <span>https://www.facebook.com/doitinhnguyen.soict</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        <Row className={style.end}>
          <span style={{textAlign: "center", marginTop: "30px"}}>All Rights Reserved</span> 
        </Row>
      </Container>
      <div className={style.divider}></div>
    </div>
  );
}

export default Footer;