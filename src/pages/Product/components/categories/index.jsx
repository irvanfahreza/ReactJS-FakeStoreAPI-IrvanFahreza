import React, { useEffect, useState } from "react";
import "./styles.css";

const Categories = () => {
  const [category, setCategory] = useState([]);
  // const [searhCategory, setSearchCategory] = useState ([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
    // fetch(`https://fakestoreapi.com/products/categories/${category}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="category__container">
      <label for="product">Choose a category:</label>
      <select name="product" id="product">
        {category?.map((item) => {
          return <option value={item}>{item}</option>;
        })}
        {/* <div
          onChangeData={changingSearchCategory}
          categories = {categoryFilter}
        /> */}
      </select>
    </div>
  );
};

export default Categories;

//   return (
//     <div className="category__container">
//       <label for="product">Choose a category:</label>
//       <select name="product" id="product">
//         {category?.map((item, idx) => {
//           return (
//           <option
//           onSelect={onSelectData}
//           key={idx}
//           value={item.value}
//           >
//             {item}
//           </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };

// export default Categories;

  // function changingSearchCategory(e) {
  //   setSearchCategory(e.target.value);
  // }

  // // function spesificCategory (item){
    
  // // }

  // const categoryFilter = category.filter((categories) =>
  // categories.title.toLowerCase().includes(searhCategory.toLowerCase())
  // );




