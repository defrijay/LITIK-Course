import React, { createContext, useContext, useState } from 'react';

const IdentityContext = createContext();

export const IdentityProvider = ({ children }) => {
    const [identity, setIdentity] = useState(null); // Menyimpan data identitas

    return (
        <IdentityContext.Provider value={{ identity, setIdentity }}>
            {children}
        </IdentityContext.Provider>
    );
};

export const useIdentity = () => useContext(IdentityContext);