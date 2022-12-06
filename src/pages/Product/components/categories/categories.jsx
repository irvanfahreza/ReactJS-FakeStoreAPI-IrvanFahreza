import React, { useEffect, useState } from "react";
import "./styles.css";

const Category = () => {
    const [searchCategory, setSearchCategory] = useState ([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>setSearchCategory(json))
    
    }, []);
}

export default Category;