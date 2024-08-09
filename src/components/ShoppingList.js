import React from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, onCategoryChange, selectedCategory }) {
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
