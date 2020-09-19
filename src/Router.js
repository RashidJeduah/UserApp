import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import EditForm from './components/EditForm';
import App from './App';
const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App}/>
            <Route path="/edit/:id" component={EditForm}/>
        </BrowserRouter>
    );
}

export default Router;