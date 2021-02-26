import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavLogo from "./assets/rick-and-morty.png"

const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: 0 8px 6px -6px #777;
    background-color: #fff;

    @media screen and (min-width: 1600px) {
        padding-left: calc((100% - 1420px) / 2);
        padding-right: calc((100% - 1420px) / 2);
    }

    > img {
        width: 90px;

    }
`;

const NavbarRight = styled.div`
    > a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        color: #000;

        &:first-child {
            margin-right: 30px;
        }
    }

    > .navLinkSelected {
        position: relative;
        color: rgba(154, 193, 232, 1);
        
        &::after {
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            content: "";
            background-color: rgba(154, 193, 232, 1);
        }
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <img src={NavLogo} alt="Rick and Morty Logo"/>
            <NavbarRight>
                <NavLink exact to="/" activeClassName="navLinkSelected">Episodes</NavLink>
                <NavLink exact to="/favorites" activeClassName="navLinkSelected">Favorites</NavLink>
            </NavbarRight>
        </NavbarContainer>
    );
};

export default Navbar;
