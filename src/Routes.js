import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { RequireAuth } from './components/RequireAuth';
import AddVehicle from './pages/AddVehicle';
import Vehicles from './pages/Vehicles';
import EditVehicle from './pages/EditVehicle'
import AddAuction from './pages/AddAuction';
import AddImages from './pages/AddImages';
import Auctions from './pages/Auctions';
import Negotiations from './pages/Negotiations';
import Invoices from './pages/Invoices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useEffect, useState } from 'react';
import EditAuction from './pages/EditAuction';
import Accounts from './pages/Accounts';
import Evaluations from './pages/Evaluations';
import Toc from './pages/Toc';
import About from './pages/About';
import Classifieds from './pages/Classifieds';

const AdminRoutes = () => {

    const [negotiations, setNegotiations] = useState([])
    const [auctions, setAuctions] = useState([])

    const fetchNegotiations = () => {
        fetch(`${process.env.REACT_APP_API}/prenegotiations`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data.data)
          setNegotiations(data.data)
          var count = 0
          data.data.map((item)=>(
            item.Buy_Now_Price ? count = count + 1 : null
          ))
          localStorage.setItem("negotiationsCount", count)
        })
    }
    
    const fetchAuctions = () => {
        fetch(`${process.env.REACT_APP_API}/auctions`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setAuctions(data.data)
          })
    }

    useEffect(()=>{
        setInterval(fetchNegotiations, 4000)
        setInterval(fetchAuctions, 4000)
    },[])

    return (
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route exact path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
            <Route exact path='/vehicle/add' element={<RequireAuth><AddVehicle/></RequireAuth>} />
            <Route exact path='/vehicle/edit/:id' element={<RequireAuth><EditVehicle/></RequireAuth>} />
            <Route exact path='/vehicles' element={<RequireAuth><Vehicles/></RequireAuth>} />
            <Route exact path='/auction/add' element={<RequireAuth><AddAuction/></RequireAuth>} />
            <Route exact path='/auction/edit/:id' element={<RequireAuth><EditAuction/></RequireAuth>} />
            <Route exact path='/auctions' element={<RequireAuth><Auctions auctions={auctions}/></RequireAuth>} />
            <Route exact path='/negotiations' element={<RequireAuth><Negotiations negotiations={negotiations}/></RequireAuth>} />
            <Route exact path='/images/add' element={<RequireAuth><AddImages/></RequireAuth>} />
            <Route exact path='/invoices' element={<RequireAuth><Invoices/></RequireAuth>} />
            <Route exact path='/toc' element={<RequireAuth><Toc/></RequireAuth>} />
            <Route exact path='/about' element={<RequireAuth><About/></RequireAuth>} />
            <Route exact path='/accounts' element={<RequireAuth><Accounts/></RequireAuth>} />
            <Route exact path='/classifieds' element={<RequireAuth><Classifieds/></RequireAuth>} />
            <Route exact path='/evaluations' element={<RequireAuth><Evaluations/></RequireAuth>} />
        </Routes>
    )
};

export default AdminRoutes;