import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Login from "../components/login";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  const [openLogin, setOpenLogin] = useState(false);
  return ( 
    <div className="relative w-screen overflow-x-hidden" >
      {
        openLogin && <Login setOpenLogin ={setOpenLogin }/>
      }
      <Navbar setOpenLogin={setOpenLogin} />

      <main className="py-28" >
        {children}
      </main>

      
      <hr  className="border-2 border-gray-400" />
      <Footer />
    </div>
   );
}
 
export default Layout;