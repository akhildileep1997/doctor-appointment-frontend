import { Route , Routes} from 'react-router-dom';
import AllDoctors from './AllDoctors/AllDoctors';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ViewDoctors from './ViewDoctor/ViewDoctor'



function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<AllDoctors />} />
      <Route path='/view-doctor/:id' element={<ViewDoctors />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
