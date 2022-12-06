import React, { useEffect, useState } from "react";
import AddProducts from "./components/addproducts/AddProducts";
import Button from "./components/button/Button";
import CardBody from "./components/cards/CardBody";
import Category from "./components/categories";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

import "./App.css";
function Product() {
  const [items, setItem] = useState([]);
  // const [itemsSort, setSort] = useState("asc");
  const [searchValue, setSearchValue] = useState("");
  // const [searchCategory, setSearchCategory] = useState ([]);
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    // fetch(`https://fakestoreapi.com/products/${items.id}`) kalo mau ambil spesific data
    // fetch('https://fakestoreapi.com/products?sort=${desc}') kalo mau sort data
    // fetch(`https://fakestoreapi.com/products/category/${category}`)
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  console.log("category:", searchValue);

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  const itmesFilter = items.filter((item) =>
  item.title.toLowerCase().includes(searchValue.toLowerCase())
  );


  // function changingSelectData(e) {
  //   setSearchCategory(e.target.value);
  // }


  // const categoryFilter = items.filter((item) =>
  //   item.category.includes(searchCategory)
  // );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

  return (
    <div className="body__container">
      <div className="nav">
        <Header />
        <div className="nav-right">
          <Search
            products={items}
            value={searchValue}
            onChangeData={changingSearchData}
          />
          <Button num={addedItems.length} click={setShowAddProducts} />
        </div>
      </div>
      <Category 
        // products={items}
        // item={searchCategory}
        // onSelectData={changingSelectData}
      />

      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}
      <CardBody
        // category={categoryFilter}
        products={itmesFilter}
        addItem={addItem}
        removeItem={removeItem}
        addedItems={addedItems}
      />
    </div>
  );
}


export default Product;
