import React, { createContext, ReactChild } from 'react'
import { useCount } from '../hooks/useCount';


export const CountContext = createContext({ count: 0, increment: () => { }, decrement: () => { } })


export const CountProvider = ({ children }: { children: ReactChild | ReactChild[] }) => {
    const data = useCount()
    return <CountContext.Provider value={data}>{children}</CountContext.Provider>
}
