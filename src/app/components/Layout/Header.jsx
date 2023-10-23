"use client"
import "./Header.css";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import {categoryActions} from "../../redux/reducer/categoryslice"
import { useEffect } from "react";
function Header({ activeHeading }) {

  return (
    <div>
      <Search activeHeading={activeHeading} />
    </div>
  );
}

export default Header;
