import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';
import '../App.css';


export async function action() {
    const newContact = await createContact();
    return redirect(`/contacts/${newContact.id}/edit`);
}

export async function loader() {
    const contacts = await getContacts();
    return {contacts};
}

const Root = () => {

    const {contacts} = useLoaderData();
    console.log(contacts);

    return (
        <App>
            <Header />

            <AppBody>
                <Sidebar />
                <Outlet />
            </AppBody> 
        </App>
    )
}

const App = styled.div`
    height: 100vh;
`;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;

export default Root