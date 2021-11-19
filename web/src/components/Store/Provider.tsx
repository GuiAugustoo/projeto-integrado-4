import React, { ReactNode } from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

interface Props {
    children: ReactNode
}

const StoreProvider = ({ children }: Props) => {

    const [token, setToken] = useStorage('token');

    return (
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;