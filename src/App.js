import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute';
import Appointments from './components/Dashboard/Appointments/Appointments';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './components/Login/AdminRoute';

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        {/* Nested Routes  */}
        <Route path="dashboard" element={<Dashboard/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path="appointments" element={<Appointments/>}/>
          <Route path="make-admin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
