import Footer from "../components/footer";
import Navbar from "../components/navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return ( 
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
   );
}
 
export default Layout;