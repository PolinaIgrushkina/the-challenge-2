import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from 'redux/operations';
import { getItems } from 'redux/selectors';
import { Item } from './Item';

export default function SecondList() {
  const { items, isLoading, error } = useSelector(getItems);

  const newArr = useMemo(
    () =>
      items.map(item => {
        return { ...item, children: [] };
      }),
    [items]
  );

  const data = useMemo(
    () =>
      newArr.filter(item => {
        return !(
          item.parent_id && newArr[item.parent_id - 1].children.push(item)
        );
      }),
    [newArr]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {error && alert(error)}
      <ul>
        {data.map(item => (
          <Item data={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
