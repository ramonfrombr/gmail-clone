import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';


function SendMail() {

    
    const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const onSubmit = data => console.log(data);

    /*
    const onSubmit = (data) => {
        console.log(data);
    }*/

    return (
        <SendMailContainer>
            <SendMailHeader>
                <h3>New Message</h3>
                <CloseIcon style={closeButtonStyle} />
            </SendMailHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input
                    name='to'
                    placeholder="To"
                    {...register('to', {required: true})}
                />
                {errors.to && <MailError>The 'to' field is required</MailError>}

                
                <input
                    name='subject'
                    placeholder="Subject"
                    {...register('subject', {required: true})}
                />
                {errors.subject && <MailError>The 'subject' field is required</MailError>}
                
                
                <input 
                    name='message'
                    placeholder="Message"
                    style={sendMailMessageStyle}
                    {...register('message', {required: true})}
                />
                {errors.message && <MailError>The 'message' field is required</MailError>}
                
                <SendMailOptions>   
                    <Button
                        style={sendButtonStyle}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </SendMailOptions>
            </form>
        </SendMailContainer>
    )
}


const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0px;
    right: 50px;
    background-color: #404040;
    width: 40%;
    height: 40%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

    & > form {
        display: flex;
        flex: 1;
        flex-direction: column;

        & > input {
            height: 30px;
            padding: 10px;
            border: none;
            border-bottom: 1px solid whitesmoke;
            outline: none;
        }

        & > span {
            background-color: white;
            color: red;
            font-size: small;
            padding: 10px;
        }
    }
`;

const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;

    & > h3 {
        color: whitesmoke;
        font-size: 13px;
    }
`;

const SendMailOptions = styled.div`

`;

const MailError = styled.p`
    color: red;
    background-color: white;
    text-align: right;
    padding: 2px;
`;


// Styles

const sendButtonStyle = {
    backgroundColor: '#3079ed',
    textTtansform: 'capitalize',
    margin: '15px',
}

const closeButtonStyle = {
    cursor: 'pointer',
}

const sendMailMessageStyle = {
    flex: 1,
}


export default SendMail;