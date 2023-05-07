import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
         <div>
         <h3>
                <span className='text-5xl font-bold'>{option.price}</span>
                <span className='text-2xl text-slate-600'>/mon</span>
                </h3>
                <p className='text-2xl font-bold my-4'>{option.name}</p>

         </div>
           {
            features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
           }
           <button className='bg-green-500 w-full rounded-md mt-4 py-2 font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;