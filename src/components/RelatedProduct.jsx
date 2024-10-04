import React from 'react';
import Item from "../components/Item";
import all_products from "../assets/all_products"; // Import your products list

function RelatedProduct({ category }) {
    const filteredProducts = all_products.filter(item => item.category === category);

    return (
        <section className='bg-primary'>
            <div className='max_padd_container py-12 xl:w-[88%]'>
                <h3 className='h3 text-center'>Related Products</h3>
                <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16' />
                {/* Container */}
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Item
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full">No related products found for this category.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct;
