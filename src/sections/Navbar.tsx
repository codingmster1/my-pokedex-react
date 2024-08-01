 import React, { useEffect, useState } from 'react'
 import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../assets/pokeball-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { resetRandomPokemons } from '../app/slices/PokemonSlice';
import { FiXCircle } from "react-icons/fi";
import { FaRegTimesCircle, FaRegWindowClose } from 'react-icons/fa';
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux';

function Navbar() {
    function openMenu() {
        document.body.classList.add("menu--open");
    }

    function closeMenu () {
        document.body.classList.remove("menu--open");
    }

    const navigationRoutes = [
        {
          name: "Search",
          route: "/search",
        },
        {
          name: "Compare",
          route: "/compare",
        },
        {
          name: "Pokemon",
          route: "/pokemon",
        },
        {
          name: "My List",
          route: "/list",
        },
        {
          name: "About",
          route: "/about",
        },
      ];
      const location = useLocation();
        const dispatch = useAppDispatch();
      useEffect(() => {
        const index = navigationRoutes.findIndex(({ route }) =>
          location.pathname.includes(route)
        );
        ul(index);
      }, [location.pathname, navigationRoutes]);
      function ul(index: number) {
        var underlines = document.querySelectorAll<HTMLElement>(".underline");
        for (var i = 0; i < underlines.length; i++) {
          underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
        }
      }
   return (
    <nav>
        
    <div className="block">
      <img src={pokeballIcon} alt="" />
    </div>
    <div className="data">
      <ul>
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="underline"></div>
        {navigationRoutes.map(({ name, route }, index) => {
          return (
            <Link 
              to={route}
              key={index}
              onClick={(e) => { 
              dispatch(resetRandomPokemons())
            }}
            >
              <li>{name}</li>
            </Link>
          );
        })}
      </ul>
</div>
<div className="hamburger__visible">
    <div className="btn__menu" onClick={openMenu}>
    <GiHamburgerMenu />
    </div>
    </div>
<div className="menu__backdrop">
    <div className="btn__menu btn__menu--close" onClick={closeMenu}>
    <FaWindowClose />
        </div>
        <ul className="menu__links">
            <li className="menu__list">
            <Link to="/search" className="menu__link" onClick={closeMenu}>
              Search
            </Link>
            <Link to="/compare" className="menu__link" onClick={closeMenu}>
              Compare
              </Link>
              <Link to="/pokemon" className="menu__link" onClick={closeMenu}>
              Pokemon
            </Link>
            <Link to="/list" className="menu__link" onClick={closeMenu}>
              My List
            </Link>
              <Link to="/about" className="menu__link" onClick={closeMenu}>
              About
            </Link>
            </li>
         </ul>
         </div>
        {/*  </div> */}
  </nav>
   )
 }
 
 export default Navbar;