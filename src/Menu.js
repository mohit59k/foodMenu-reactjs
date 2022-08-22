import React from 'react'

const Menu = ({ menuList }) => {
	return (
		<div className='menu'>
			<h1 className='title'>
				Our Menu{' '}
				<span>
					<div className='underline'></div>
				</span>
			</h1>
			<div className='btn-container'>
				<button
					className='filter-btn'
					onClick={() => {
						menuList('all')
					}}
				>
					All
				</button>
				<button
					className='filter-btn'
					onClick={() => {
						menuList('breakfast')
					}}
				>
					Breakfast
				</button>
				<button
					className='filter-btn'
					onClick={() => {
						menuList('lunch')
					}}
				>
					Lunch
				</button>
				<button
					className='filter-btn'
					onClick={() => {
						menuList('shakes')
					}}
				>
					Shakes
				</button>
			</div>
		</div>
	)
}

export default Menu
