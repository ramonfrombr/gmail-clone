import styled from 'styled-components';


export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    & > img {
        object-fit: contain;
        height: 30px;
        margin-left: 5px;
    }
`;

export const HeaderMiddle = styled.div`
    display: flex;
    flex: 0.7;
    align-items: center;
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 5px;
    
    & > .MuiSvgIcon-root {
        color: grey;
    }

    & > input {
        border: none;
        width: 100%;
        padding: 5px;
        outline: none;
        font-size: medium;
        background-color: transparent;
    }
`;



export const HeaderRight = styled.div`
    display: flex;
    padding-right: 20px;
`;