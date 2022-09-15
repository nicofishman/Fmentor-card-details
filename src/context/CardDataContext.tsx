import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';
interface CardDataContextType {
    name: string;
    setName: (name: string) => void;
    number: string;
    setNumber: (number: string) => void;
    expMonth: string;
    setExpMonth: (expMonth: string) => void;
    expYear: string;
    setExpYear: (expYear: string) => void;
    cvc: string;
    setCvc: (cvc: string) => void;
}

export const CardDataContext = createContext<CardDataContextType | null >(null);

const CardDataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const value: CardDataContextType = useMemo(() => {
        return {
            name,
            setName,
            number,
            setNumber,
            expMonth,
            setExpMonth,
            expYear,
            setExpYear,
            cvc,
            setCvc
        };
    }, [name, number, expMonth, expYear, cvc]);

    return (
        <CardDataContext.Provider value={value}>
            {children}
        </CardDataContext.Provider>
    );
};

export default CardDataProvider;

export const useCardData = () => {
    const context = useContext<CardDataContextType>(CardDataContext as any);

    if (context === undefined) {
        throw new Error('useCardData must be used within a CardDataProvider');
    }

    return context;
};
