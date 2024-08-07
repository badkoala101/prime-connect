import React, { useEffect, useState } from 'react';
import api from '../Api'; // Import your configured axios instance

function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Item;