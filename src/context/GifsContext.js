import React, { useState } from 'react';

const GifsContext = React.createContext({})

export function GifsContextProvider({children}) {
    const [gif, setGifs] = useState([]);

    return (
        <GifsContext.Provider value={{gif, setGifs}}>
            {children}
        </GifsContext.Provider>
    )
}

export default GifsContext;