import React from 'react'

const Categories = (props) => {
	const { data } = props
	return (
		<div className='section-center'>
			{data.map((val) => {
				const { id, title, category, price, img, desc } = val
				return (
					<div className='menu-item' key={id}>
						<img src={img} alt='' className='photo' />
						<div className='item-info'>
							<header>
								<h4>{title}</h4>
								<div className='price'>$ {price}</div>
							</header>
							<div className='item-text'>{desc}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Categories
