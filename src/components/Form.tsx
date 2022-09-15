import React, { FC } from 'react';

import { useCardData } from '../context/CardDataContext';

import Input from './Input';

interface FormProps {

}

const Form: FC<FormProps> = () => {
    const { name, setName, number, setNumber, expMonth, setExpMonth, expYear, setExpYear, cvc, setCvc } = useCardData();

    return (
        <div className='w-full h-80 flex flex-col justify-between'>
            <Input className='w-full' label='Cardholder Name' placeholder='e.g Jane Appleseed' value={name} onChange={(e) => setName(e.target.value)} />
            <Input className='w-full' label='Card Number' placeholder='e.g 1234 5678 9123 0000' value={name} onChange={(e) => setName(e.target.value)} />
            <div className='flex flex-row gap-4'>
                <div className='flex items-end relative flex-1'>
                    <Input className='w-20' label='Exp. Date (MM/YY)' placeholder='MM' value={expMonth} onChange={(e) => setExpMonth(e.target.value)}/>
                    <Input className='w-20 absolute bottom-0 left-24' label='' placeholder='YY' value={expYear} onChange={(e) => setExpYear(e.target.value)}/>
                </div>
                <div className='flex-1'>
                    <Input className='w-full' label='cvc' placeholder='e.g. 123' value={cvc} onChange={(e) => setCvc(e.target.value)}/>
                </div>
            </div>
            <button className='py-2 text-center text-white w-full h-12 bg-slate-800 rounded-md'>Confirm</button>
        </div>
    );
};

export default Form;
