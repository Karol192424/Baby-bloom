import { useEffect, useState } from "react";
import useParto from "../hooks/useParto";
import { format } from "date-fns"
import { es } from 'date-fns/locale';
import Login from "../components/login";

const Calculadora = () => {

  const [primerDia, setPrimerDia] = useState("");
  const [duracionCiclo, setDuracionCiclo] = useState("");
  const {
    calcularFechas,
    fechaPreviaParto ,
    tiempoEmbarazoSemanas,
    fechaConcepcion
  } = useParto();

  const[openLogin, setOpenLogin] = useState(false);
  const [isLogued, setisLogued] = useState();

  const formatFecha = (fechaOriginal) => {
    const fecha = new Date(fechaOriginal);
    const fechaFormateada = format(fecha, 'dd MMMM yyyy', { locale: es });
    return fechaFormateada
  }

  const onClick=()=>{
    if (!isLogued){
      setOpenLogin(true)
      return
    }
    else{
      calcularFechas(primerDia, Number(duracionCiclo))
    }

  }

  

  useEffect(() => {
    const user = localStorage.getItem("user") ?? null
    setisLogued(user)
  }, [])


  

  return (
  <>
      {
        openLogin && <Login setOpenLogin={setOpenLogin} />
      }
    <div className = "px-10 sm:px-16 py-4 sm:py-8" >
      <div className="mt-10 bg-gray-100 rounded-xl px-8 py-11">
        <div className="py-6 text-4xl font-semibold">
          Calendario y calculadora
        </div>
        <div className="py-6 text-gray-600">
          ¿Tu prueba de embarazo ha salido positiva? Seguramente, tendrás muchas preguntas, como «¿De cuánto estoy?» o «¿Cuándo debo esperar la fecha de parto de mi bebé?». O igual estás pensando en fechas antes de ponerte a intentar conseguir un embarazo. Nuestra calculadora de fecha probable de parto te puede ayudar a conocer la fecha prevista en la que vas a dar a luz o cuándo podría llegar tu bebé.
        </div>
        <div className="py-5 px-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          <div className="flex flex-col">
            <label className="py-2 text-sm" htmlFor="mes">Primer día de tu último periodo</label>
            <input
              id="mes"
              type="date"
              placeholder="03 agosoto 2023"
              className="px-4 py-2 rounded-lg bg-green-200"
              onInput={(e) => setPrimerDia(e.target.value)}
              value={primerDia}
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm" htmlFor="">Duración media del ciclo</label>
            <select
              id="languageSelect"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 bg-green-200"
              value={duracionCiclo}
              onChange={(e)=>setDuracionCiclo(e.target.value)}
            >
              <option value="20" className="py-6">20 dias</option>
              <option value="21" className="py-6">21 dias</option>
              <option value="22" className="py-6">22 dias</option>
              <option value="23" className="py-6">23 dias</option>
              <option value="24" className="py-6">24 dias</option>
              <option value="25" className="py-6">25 dias</option>
              <option value="26" className="py-6">26 dias</option>
              <option value="27" className="py-6">27 dias</option>
              <option value="28" className="py-6">28 dias</option>
              <option value="29" className="py-6">29 dias</option>
              <option value="30" className="py-6">30 dias</option>
              <option value="31" className="py-6">31 dias</option>
              <option value="32" className="py-6">32 dias</option>
              <option value="33" className="py-6">33 dias</option>
              <option value="34" className="py-6">34 dias</option>
              <option value="35" className="py-6">35 dias</option>
              <option value="36" className="py-6">36 dias</option>
              <option value="37" className="py-6">37 dias</option>
              <option value="38" className="py-6">38 dias</option>
              <option value="39" className="py-6">39 dias</option>
              <option value="40" className="py-6">40 dias</option>
              <option value="41" className="py-6">41 dias</option>
              <option value="42" className="py-6">42 dias</option>
              <option value="43" className="py-6">43 dias</option>
              <option value="44" className="py-6">44 dias</option>
              <option value="45" className="py-6">45 dias</option>

            </select>
          </div>
          
        </div>
        <button
          onClick={() => onClick()}
          className="w-full rounded-lg px-4 py-2 text-center bg-teal-600 text-white font-semibold text-lg" >
          Calcular mi fecha prevista de parto
        </button>
        <hr  className="mt-6 border-2 border-gray-300 rounded-md "  />
        <div className="px-10 py-11 text-sm flex flex-col gap-y-6 text-gray-500 ">
          <li>
            Ten en cuenta que BabyBloom no recopila, procesa ni almacena ninguno de los datos que facilites al utilizar estas herramientas. Todos los cálculos se realizan exclusivamente en tu navegador. BabyBloom no tiene acceso a los resultados. Todos los datos se eliminarán permanentemente tras salir de la página o cerrarla.
          </li>
          <li>
            Nuestra calculadora de fecha prevista de parto se basa en ciclos de 28 días (los ciclos pueden ser de entre 20 y 45 días), y considera que tu periodo y ovulación tendrían lugar las dos primeras semanas de embarazo. Como este método depende de la regularidad de tu ciclo menstrual, la fecha de parto estimada no es exacta al 100 %.
          </li>
        </div>
        {
            fechaPreviaParto  && <h1 className="mx-auto font-bold text-xl sm:text-3xl md:text-4xl text-center text-gray-700 pb-6 " >
              ¡¡FELICIDADES FUTURA MADRE!!</h1> 
        }
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 items-center justify-center "
            style={{
              backgroundImage:"url('fondoFelicidades.avif')",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
      
            }}
          >
            {
              fechaPreviaParto && (
                <div className="mt-11">
                  <div className="rounded-full w-80 h-80 flex items-center justify-center flex-col gap-y-6 px-4 py-6 bg-pink-100 border-2 border-gray-300 mx-auto">
                    <div className="text-lg font-bold text-center">Conoceras a tu bebe el</div>
                    <div className="text-3xl text-center text-red-500 font-bold">
                      {fechaPreviaParto && `${formatFecha(fechaPreviaParto) }`}

                    </div>
                    <div className="text-md text-center">Aprox</div>
                  </div>
                </div>
              )
            }
            {
              fechaPreviaParto && (
                <div>
                  <div className="mt-11">
                    <div className="rounded-full w-56 h-56 flex items-center justify-center flex-col gap-y-6 px-4 py-6 bg-gray-200 border-2 border-gray-300 mx-auto">
                      <div className="text-md text-center px-6  font-semibold ">  
                        Tiempo de embarazo
                      </div>
                      <div className="text-2xl text-center text-red-500 font-bold">
                        {tiempoEmbarazoSemanas} semanas
                      </div>
                      <div className="text-sm text-center font-semibold">Aprox.</div>
                    </div>
                  </div>
                  <div className="mt-11">
                    <div className="rounded-full w-56 h-56 flex items-center justify-center flex-col gap-y-6 px-4 py-6 bg-gray-200 border-2 border-gray-300 mx-auto">
                      <div className="text-sm text-center px-4 font-semibold">
                        Fecha probable de concepion
                      </div>
                      <div className="text-xl text-center text-red-500 font-bold">
                        {formatFecha(fechaConcepcion.min)}

                      </div>
                      <div className="text-sm text-center px-3 font-semibold">Margen 3 dias</div>
                    </div>
                  </div>
                </div>
              )
            }

          </div>
        
        
        
      </div>
    </div>
  </>
   );
}
 
export default Calculadora;