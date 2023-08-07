import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const Login = ({ setOpenLogin }) => {

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate()
  
  const onSubmit =()=>{
    if (!loginData.username.trim() || !loginData.password.trim()) return;
    const usuario = JSON.stringify(loginData)
    localStorage.setItem("user", usuario)
    setOpenLogin(false)
    navigate("/")
    window.location.reload()
    
  }
  useEffect(() => {
    // Función para obtener los datos del localStorage
    const getLoginDataFromLocalStorage = () => {
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      const loginDataObject = JSON.parse(loginDataString);
      setLoginData(loginDataObject);
      }
    };

    getLoginDataFromLocalStorage();
  }, []);


  return ( 
    <div className="fixed inset-0 bg-[rgba(239,154,205,0.9)] w-screen h-full">
      
      <div className="flex items-center justify-center">
        <div className="pb-16 relative mt-52 w-2/4 max-w-[420px] bg-white py-10 px-11  rounded-3xl">
          <div
            onClick={()=>setOpenLogin(false)}
            className="absolute top-5 right-5">
            <img src="icons/close.svg" alt="close" className="w-8 h-8 hover:cursor-pointer" />
          </div>
          
          <img src="logo.png" alt="logo" className="w-56 mx-auto" />
          
          <div className="mt-11 flex flex-col gap-y-6">
            <input
              type="text"
              className="px-6 py-3 rounded-full bg-pink-300  placeholder:text-gray-700 placeholder:text-sm"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onInput={(e) => setLoginData({ ...loginData,[e.target.name]:e.target.value})}
            />
            <input
              type="password"
              className="px-6 py-3 rounded-full bg-pink-300  placeholder:text-gray-700 placeholder:text-sm"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onInput={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
            />
          </div>

          <div className="w-full flex justify-between gap-x-6 text-pink-500 mt-4">
            <div className="flex items-center justify-center gap-x-1">
              <input type="checkbox" id="checkLabel" />
              <label htmlFor="checkLabel" className="text-sm hover:text-pink-400 hover:cursor-pointer ">Remeber password</label>
            </div>
            <Link
              onClick={() => setOpenLogin(false)}
              to={"/"}
              className="text-sm hover:text-pink-400 hover:cursor-pointer">
              Olvidaste tu contraseña
            </Link>
          </div>

          <button
            onClick={() => onSubmit()}
            className="w-full rounded-2xl mt-8 bg-lime-600 hover:bg-lime-500 transition px-4 py-2 text-gray-50 font-bold"> Login </button>

          <div className="mt-6 flex gap-x-1 items-center justify-center text-pink-600 text-sm text-center">
            <div className=" ">
              No tienes cuenta?
            </div>
            <Link
              onClick={() => setOpenLogin(false)}
              to={"/"}
              className="hover:text-pink-500" >
              Create una
            </Link>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Login;