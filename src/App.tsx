import React, { FC } from 'react';

import Form from './components/Form';
import CardDataProvider from './context/CardDataContext';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <CardDataProvider>
            <div className='w-full h-screen flex lg:flex-row flex-col'>
                <div className='w-full lg:h-full lg:w-1/3 w-full h-1/3 lg:bg-mainDesktop bg-mainMobile bg-cover' />
                <div className="bg-white text-white flex h-screen w-full flex justify-center items-center">
                    <div className='w-96'>
                        <Form />
                    </div>
                </div>
            </div>
        </CardDataProvider>
    );
};

export default App;
