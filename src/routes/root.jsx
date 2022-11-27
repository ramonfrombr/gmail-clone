import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';
import '../App.css';
import SendMail from '../components/SendMail';

import {useSelector} from 'react-redux';
import { selectSendMessageIsOpen } from '../app/mailSlice';


export async function action() {
    const newContact = await createContact();
    return redirect(`/contacts/${newContact.id}/edit`);
}

export async function loader() {
    const contacts = await getContacts();
    return {contacts};
}

const Root = () => {

    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

    return (
        <App>
            <Header />

            <AppBody>
                <Sidebar />
                <Outlet />
            </AppBody>

            {sendMessageIsOpen && <SendMail />}
        </App>
    )
}

const App = styled.div`
    max-height: 100vh;
`;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;

export default Root