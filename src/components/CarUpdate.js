import React from 'react'

const CarUpdate = ({ car, handleChange, handleUpdateCar }) => {
	return (
		<>
			<input 
            type='text' 
            value={car.brand} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={car.model} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateCar}>Update car</button>
		</>
	)
}

export default CarUpdate