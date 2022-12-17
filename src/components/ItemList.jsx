import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from 'redux/operations';
import { getItems } from 'redux/selectors';

export default function ItemList() {
  const { items, isLoading, error } = useSelector(getItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {error && alert(error)}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </>
  );
}
