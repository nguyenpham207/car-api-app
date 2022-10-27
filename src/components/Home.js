import React from "react"
import { Navigate } from "react-router-dom"

const Home = ({ user }) => {
	if (user) {
		return (
			<Navigate to ='/cars'/>
		)
	}

	return (
		<>
			<h2>I LOVE CARS!!!!</h2>
		</>
	)
}

export default Home
