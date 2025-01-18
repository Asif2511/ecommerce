
import { useState } from "react";
import { useEffect } from "react";
function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/getproducts/');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log('Fetched products:', data);
                setProducts(data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
        
    }, []); 


    
    

    
       

    return (
        <div className=" flex flex-wrap flex-row justify-evenly	  align-center bg-gray-100" >
            {
                products.map((product) => (
                    <div key={product._id} className="m-8 bg-white p-6 rounded-lg shadow-lg w-2/12">
                    <div className="mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-52 object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                      <p className="text-sm text-gray-600 mt-2">{product.description.substring(0, 100)}</p>
                      <p className="text-sm text-gray-600 mt-2">{product.price+"$"}</p>
                    </div>
                  </div>
                ))
            }
 
</div>



    )
}
export default Products