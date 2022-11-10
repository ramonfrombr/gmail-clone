import React from 'react'
import styled from 'styled-components';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import {useNavigate} from 'react-router-dom';


function EmailRow({id, title, subject, description, time}) {
    
    const navigate = useNavigate();
    
    return (
        <EmailRowContainer
            onClick={() => navigate("/mail")}
        >
            <Options>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </Options>

            <Title>{title}</Title>

            <Message>
                <h4>
                    {subject}&nbsp;
                    <Description>- {description}</Description>
                </h4>
            </Message>

            <Time>{time}</Time>
        </EmailRowContainer>
    )
}

const EmailRowContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 999;

    &:hover {
        border-top: 1px solid whitesmoke;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    }
`;

const Options = styled.div`
    display: flex;
`;

const Title = styled.h3`
    font-size: 13px;
    flex : 0.3;
`;

const Message = styled.div`
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;

    & > h4 {
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

const Description = styled.span`
    font-weight: 400;
    color: gray;
`;

const Time = styled.p`
    padding-right: 15px;
    font-size: 9px;
    font-weight: bold;
`;

export default EmailRow