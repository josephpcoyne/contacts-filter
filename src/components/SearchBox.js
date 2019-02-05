import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input className='pa3 ba b--green bg-lightest-blue' 
			type='search'
			placeholder='Search Contacts'
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;