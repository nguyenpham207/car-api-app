import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { carDelete, carShow, carUpdate } from '../api/car'
import CarUpdate from './CarUpdate'

const CarShow = ({ user, msgAlert }) => {

    const [car, setCar] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        carShow(user, id)
        .then((res) => {
            setCar(res.data.car)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Car Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
    
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleUpdateCar = () => {
        carUpdate(car, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating car',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update car Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteCar = () => {
        carDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Car',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a Car Failure' + error,
                variant: 'danger'
            })
        })
    }

   

  
    if (deleted) navigate('/cars')
   
    return (
			<>
				<h3>Brand: {car.brand}</h3>
				<p>Model: {car.model}</p>
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<CarUpdate
						car={car}
						handleChange={handleChange}
						handleUpdateCar={handleUpdateCar}
					/>
				)}
                <button onClick={handleDeleteCar} >Delete</button>
			</>
		)
}

export default CarShow