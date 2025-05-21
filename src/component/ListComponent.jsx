import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li style={{ padding: '20px', border: '1px solid #ccc', }} key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default ListComponent;