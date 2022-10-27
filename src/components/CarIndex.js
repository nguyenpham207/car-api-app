import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { carIndex } from '../api/car'

const CarIndex = ({ user, msgAlert }) => {

    const [allCars, setAllCars] = useState([])

    useEffect(() => {
        carIndex(user)
        .then(res => {
            setAllCars(res.data.cars)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Cars Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCarsJSX = allCars.map(car => {
        return (
            <Link to={car._id} key={car._id}>
            <li>Brand: {car.brand} model: {car.model}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCarsJSX}</ul>
        </>
    )
}

export default CarIndex