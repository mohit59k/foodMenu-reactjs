import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
	const [val, setVal] = useState(items)
	const menuList = (d) => {
		if (d === 'all') {
			console.log('1')
			setVal((prevVal) => {
				return items
			})
		} else if (d === 'breakfast') {
			console.log('2')
			let y = items.filter((item) => {
				return item.category === d
			})
			setVal((prevVal) => {
				return y
			})
		} else if (d === 'lunch') {
			console.log('3')
			let y = items.filter((item) => {
				return item.category === d
			})
			setVal(y)
		} else if (d === 'shakes') {
			console.log('4')
			let y = items.filter((item) => {
				return item.category === d
			})
			setVal(y)
		}
	}
	return (
		<div className='section'>
			<Menu menuList={menuList} />
			<Categories data={val} />
		</div>
	)
}

export default App
