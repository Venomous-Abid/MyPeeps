import React from 'react';

///searchchange is being passed

const SearchBox = ({searchField, searchChange}) => {

	return (

		<div className='pa2'>

		<input

		 className=' pa2 ba b--green bg-lightest-green'
		 type='search' 
		 placeholder='Search People' 
		 onChange={searchChange}

		 />

		</div>
		);
}

export default SearchBox;