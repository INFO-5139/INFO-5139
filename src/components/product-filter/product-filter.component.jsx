import { DropDownSelect } from './product-filter.styles';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedItem } from '../../redux/selectedItem/selectedItemSlice';
// import { useState } from 'react';

const ProductFilterSelection = () => {
  // const [tagState, setTagState] = useState('');
  const dispatch = useDispatch();
  const TagsArray = useSelector(
    (state) => state.frontPageCollection.collection
  );
  const selectedTag = useSelector((state) => state.selectedItem.item);

  const TagsArraySet = new Set();

  for (let i = 0; i < TagsArray.length; i++) {
    const tags = TagsArray[i].tags;
    for (let j = 0; j < tags.length; j++) {
      TagsArraySet.add(tags[j]);
    }
  }

  const uniqueTags = Array.from(TagsArraySet);
  uniqueTags.splice(0, 0, '-- Please select an option --');

  return (
    <>
      <label>
        Filter Products:{' '}
        <DropDownSelect
          title='Filter Products'
          value={selectedTag}
          onChange={(e) => dispatch(setSelectedItem(e.target.value))}
        >
          {uniqueTags.map((item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </DropDownSelect>
      </label>
    </>
  );
};

export default ProductFilterSelection;
