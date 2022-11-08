import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';


import {
    HeaderContainer,
    HeaderLeft,
    HeaderMiddle,
    HeaderRight,
} from './HeaderComponents';

import GmailLogo from '../../static/images/gmail-logo-2.png'

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img style={{}} src={GmailLogo} alt="" />
            </HeaderLeft>

            <HeaderMiddle>
                <SearchIcon />
                <input placeholder="Search mail" />
                <ArrowDropDownIcon />
            </HeaderMiddle>


            <HeaderRight>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header