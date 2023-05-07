import React from 'react';
import PricEOptions from '../PriceOption/PriceOption';


const Pricing = () => {
    const PricingOptions = [
       {id: 1, name: 'Free', price: 0,  features: [
        'Awsome Feature',
        'Excellent Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
       ]},
       {id: 2, name: 'Medium', price: 9.99, features: [
        'Awsome Feature',
        'Excellent Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
       ]
    },
       {id: 3, name: 'Premium', price: 19.99, features: [
        'Awsome Feature',
        'Excellent Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
       ]},
       
    ]
    return (
        <div>
            <h2 className='text-2xl font-bold mt-6 bg-indigo-300 p-12'>Best deal of the town.</h2>
             <div className='grid md:grid-cols-3 gap-3 mt-4'>
             {
                PricingOptions.map(option =><PricEOptions
                  key={option.id}
                  option={option}
                ></PricEOptions>)
             }
             </div>
        </div>
    );
};

export default Pricing;