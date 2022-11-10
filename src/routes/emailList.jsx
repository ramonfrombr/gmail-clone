import React from 'react'
import styled from 'styled-components';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import Section from '../components/Section';
import EmailRow from '../components/EmailRow';

const EmailList = () => {
    return (
        <EmailListContainer>
            <Settings>
                <SettingsLeft>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SettingsLeft>

                <SettingsRight>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </SettingsRight>
            </Settings>

            <Sections>
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </Sections>

            <Emails>
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" /><EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" /><EmailRow title="Twitch" subject="Hey fellow streamer" description="This is a test" time="10pm" />

            </Emails>
        </EmailListContainer>
    )
}


const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;
`;

const Settings = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
    padding-right: 10px;
`;

const SettingsLeft = styled.div``;

const SettingsRight = styled.div``;

const Sections = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: 1px  solid whitesmoke;
    background-color: white;
    z-index: 999;
`;

const Emails = styled.div`

`;

export default EmailList;