import React from 'react';
import PropTypes from 'prop-types';

function SearchInput(props) {
  const searchRef = React.createRef();
  const {filterData} = props;

  const doSearch = () => {
    if (searchRef && searchRef.current && searchRef.current.value) {
      filterData(searchRef.current.value);
    }
  }

  return (
    <div className="text-center p-2">
      <span>Search by title: </span>
      <input type="text" ref={searchRef}  placeholder="Please enter title !" onChange={doSearch}></input>
    </div>
  )
}

SearchInput.propTypes = {
  filterData: PropTypes.array
};

export default SearchInput;
