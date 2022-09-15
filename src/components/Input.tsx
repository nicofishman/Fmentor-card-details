import React, { FC } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: FC<InputProps> = ({ className, label, placeholder, value, onChange }) => {
    return (
        <div>
            <p className='uppercase font-bold mb-3 whitespace-nowrap text-sm'>{label}</p>
            <input className={clsx(
                'h-10 p-4 rounded-md border-slate-300 border outline-none text-black', className
            )} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
