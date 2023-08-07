import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/icons/expand.svg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setOpenLogin }) => {

  const [navbarColor, setNavbarColor] = useState("bg-white");
  const [onMouse, setOnMouse] = useState(false);
  const [isLogued, setisLogued] = useState();
  const navigation = useNavigate()

  const onClickOpen=()=>{
    setOnMouse(state=>!state)
  }

  const loguot = () => {
    localStorage.removeItem('user');
    setisLogued(null)
    navigation("/")
    window.location.reload();
  }


  useEffect(()=>{
    const handleScroll=()=>{
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarColor("bg-pink-100");
      } else {
        setNavbarColor("bg-white");
      }
    }
    const user = localStorage.getItem("user") ?? null
    setisLogued(user)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])

  return ( 
    <div
      className={`w-screen fixed top-0 left-0 flex justify-evenly gap-x-4 px-4 py-6 ${navbarColor} z-10 shadow`} >
      <img src="/logo.png" alt="logo" className="w-40 sm:w-52" />
      <div className="flex items-center justify-between gap-x-12">
        <Link to={"/"}>
          <div className="text-sm sm:text-2xl text-pink-900 hover:text-pink-600 transition">
            Inicio
          </div>
        </Link>
        <div
          
          to={"/calculadora"}>
          <div className="text-sm sm:text-2xl text-pink-900 transition relative flex items-center justify-center">
            Calculadoras
            <img
              onClick={onClickOpen}
              src={logo} alt="expand" className="w-6 h-6 hover:cursor-pointer" />
          </div>
          {onMouse && (<div className="absolute top-20 mt-3 rounded-xl w-80 bg-gray-200 px-6 py-3 flex flex-col gap-y-3">
            <Link
              onClick={onClickOpen}
              to={"/calculadora"}
              className="text-sm sm:text-lg text-gray-600 hover:text-gray-500">
              Calculadora de ovulacion
            </Link>
            <Link
              onClick={onClickOpen}
              to={"/calculadora"}
              className="text-sm sm:text-lg text-gray-600 hover:text-gray-500">
              Calculadora de niveles de hCG
            </Link>
            <Link
              onClick={onClickOpen}
              to={"/calculadora"}
              className="text-sm sm:text-lg text-gray-600 hover:text-gray-500">
              Calculadora de periodo
            </Link>
          </div>)}
        </div>
        
        <Link to={"/acerca"}>
          <div className="text-sm sm:text-2xl text-pink-900 hover:text-pink-600 transition">
            Acerca de
          </div>
        </Link>
        
      </div>
      <div className="hidden lg:flex items-center justify-between gap-x-6">
        {
          isLogued ? (
            <button
              onClick={() => loguot()}
              className="text-pink-900 font-medium text-xl"
            >
              Salir
            </button>
          ) : (
            
          <>
              <button
                onClick={() => setOpenLogin(true)}
                className="text-pink-900 font-medium text-xl"
              >
                Iniciar Sesion
              </button>
              <button className="px-3 py-2 bg-pink-900 text-xl text-white">Regístrate</button>
          </>
          )
        }
        
      </div>
    </div>
   );
}
 
export default Navbar;