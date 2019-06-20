import React, { useState }  from 'react';

export const ProductContext = React.createContext();


export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    return (
        <ProductContext.Provider value ={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}