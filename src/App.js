import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Appointment from './Pages/Appointment/Appointment'
import ContactUs from './Pages/ContactUs/ContactUs'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'
import NotFound from './Pages/NotFound/NotFound'
import Reviews from './Pages/Reviews/Reviews'
import Navbar from './Pages/Shared/Navbar'

function App() {
	return (
		<div className='max-w-7xl mx-auto'>
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route
					path='/appointment'
					element={<Appointment></Appointment>}
				></Route>
				<Route path='/reviews' element={<Reviews></Reviews>}></Route>
				<Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/signup' element={<SignUp></SignUp>}></Route>
				<Route path='/*' element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	)
}

export default App
