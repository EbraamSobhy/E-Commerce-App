    import React, { useEffect, useState } from "react";
    import Hero from "../components/Hero";
    import Popular from "../components/Popular";
    import Offer from "../components/Offer";
    import NewCollections from "../components/NewCollections";
    import NewsLetter from "../components/NewsLetter";

    const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/products');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
        };

        fetchProducts();
    }, []);

    return (
        <>
        <Hero />
        <Popular products={products} />
        <Offer />
        <NewCollections products={products} />
        <NewsLetter />
        </>
    );
    };

    export default Home;
