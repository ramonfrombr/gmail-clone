import React from 'react'
import styled from 'styled-components';

function Section({ Icon, title, color, selected }) {
  return (
    <SectionContainer
        color={color}
        selected={selected}
    >   
        <Icon />
        <h4>{title}</h4>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    min-width: 200px;
    cursor: pointer;
    border-width: 0 !important;

    border-bottom: 3px solid ${props => props.color};
    color: ${props => props.selected && props.color};
    background-color: ${props => props.selected && 'whitesmoke'};
    border-width: ${props => props.selected && '3px !important'};

    &:hover {
        background-color: white;
        border-width: 3px !important;
    }

    & > h4 {
        font-size: 14px;
        margin-left: 15px;
    }

`;

export default Section