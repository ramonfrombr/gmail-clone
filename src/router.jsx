import {
    createBrowserRouter,
} from 'react-router-dom';

import ErrorPage from './routes/error-page';

import Root, {
    loader as rootLoader,
    action as rootAction,
} from './routes/root';

import Contact, {
    loader as contactLoader
} from './routes/contact';

import EditContact, {
    action as editAction
} from './routes/edit';


import EmailList from './routes/emailList';
import Mail from './routes/mail';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <EmailList />,
            },
            {
                path: "mail",
                element: <Mail />,
            },
            /*
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            }*/
        ]
    },
])

