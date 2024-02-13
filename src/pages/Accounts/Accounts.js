import React from "react";
import RegistrationForm from './RegistrationForm';

import { Routes, Route } from "react-router-dom";

export default function Accounts() {

    return (
        <div>
        <h1>Accounts</h1>
        <Routes>
            <Route path="/" element={<RegistrationForm />} />
        </Routes>
        </div>
    );
    }
