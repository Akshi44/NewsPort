// rce 
import React from 'react'
import loader from './gif1.gif'
const Loading =()=> {
		return (
			<div className='text-center my-2'>
				<img style={{backgroundColor:"none"}} src={loader} alt="Loading..." />
			</div>
		)
}

export default Loading
