import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import style from "./header.module.scss";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUserRequest } from "../../../redux/user/action";
import { useRouter } from "next/dist/client/router";
import { logoutCartRequest } from "../../../redux/cart/action";
import { alertService } from "../../Alert/alert.service";
import { fetchLogoutProductsShopRequest } from "../../../redux/product-shop/action";

const Header = () => {
  const [search, setSearch] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const route = useRouter();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutUserRequest());
    dispatch(logoutCartRequest());
    dispatch(fetchLogoutProductsShopRequest());
    alertService.success("Đăng xuất thành công");
    route.push("/");
  };

  const searchSubmit = () => {
    route.push({
      pathname: "/",
      query: { search: search },
    });
  };

  return (
    <div className={style["header"]}>
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className={style["header_nav"]} isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link href="/">
                <a className={style["header_item"]}>Trang chủ</a>
              </Link>
            </NavItem>
            {user.status === "succeeded" ? (
              <>
                <NavItem>
                  <Link href="/shop">
                    <a className={style["header_item"]}>Cửa hàng</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/order">
                    <a className={style["header_item"]}>Đơn hàng</a>
                  </Link>
                </NavItem>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Collapse>
        {user.status !== "succeeded" ? (
          <Nav className={style["header_sign"]}>
            <NavItem>
              <Link href="/login">
                <a className={style["header_item"]}>Đăng nhập</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/register">
                <a className={style["header_item"]}>Đăng ký</a>
              </Link>
            </NavItem>
          </Nav>
        ) : (
          <Nav className={style["header_sign"]}>
            <NavItem className={style["header_item"]}>
              {user.user?.fullName}
            </NavItem>
            <NavItem>
              <UncontrolledDropdown>
                <DropdownToggle
                  className={style["header_dropdown"]}
                  caret
                ></DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link href="/edit-profile">
                      <a className={style["header_dropdown--item"]}>
                        Sửa thông tin
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/reset/[id]" as={`/reset/${user.user._id}`}>
                      <a className={style["header_dropdown--item"]}>
                        Đổi mật khẩu
                      </a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        )}
      </Navbar>

      <div className={style["header_search"]}>
        <div className={style["header_input"]}>
          <form onSubmit={searchSubmit}>
            <input
              name="search"
              type="text"
              className={style["header_input--box"]}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={style["header_input--btn"]}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <Link href="/cart">
          <a>
            <FontAwesomeIcon
              className={style["header_cart"]}
              icon={faShoppingCart}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
