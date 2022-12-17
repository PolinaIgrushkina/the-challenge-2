import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from 'redux/operations';
import { getItems } from 'redux/selectors';
import { Item } from './Item';

export default function SecondList({ data, parentId = 0 }) {
  const { items, isLoading, error } = useSelector(getItems);

  const newItems = useMemo(
    () => items.filter(item => item.parent_id === parentId),
    // eslint-disable-next-line
    [items]
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
        {newItems.map(item => (
          <Item key={item.id} label={item.label}>
            <SecondList data={items} parentId={item.id} />
          </Item>
        ))}
      </ul>
    </>
  );
}

SecondList.propTypes = {
  parent_id: PropTypes.number,
};
