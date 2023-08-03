import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="flex justify-evenly gap-x-4 px-4 py-6" >
      <img src="/logo.png" alt="logo" className="w-40 sm:w-52" />
      <div className="flex items-center justify-between gap-x-12">
        <Link to={"/calculadora"}>
          <div className="text-sm sm:text-2xl text-pink-900">
            Inicio
          </div>
        </Link>
        
        <div className="text-sm sm:text-2xl text-pink-900">
          Calculadoras
        </div>
        <div className="text-sm sm:text-2xl text-pink-900">
          Acerca de 
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-x-6">
        <button className="text-pink-900 font-medium text-xl" >Iniciar Session</button>
        <button className="px-3 py-2 bg-pink-900 text-xl text-white">Registrate</button>
      </div>
    </div>
   );
}
 
export default Navbar;