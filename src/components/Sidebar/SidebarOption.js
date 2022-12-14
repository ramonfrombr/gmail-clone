import React from 'react'
import styled from 'styled-components';
import "./SidebarOption.css"

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <SidebarOptionContainer className={`${selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </SidebarOptionContainer>
    )
}

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color:  #818181;

    & > .MuiSvgIcon-root {
        padding: 5px;
    }

    & > h3 {
        flex: 1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    & > p {
        display: none;
        font-weight: 300;
    }

    &:hover,
    &:hover > h3,
    &:hover > p {
        background-color: #fcecec;
        color:  #c04b37;
        font-weight: 800 !important;
    }

    &:hover > p {
        display: inline;
    }
`;


export default SidebarOption