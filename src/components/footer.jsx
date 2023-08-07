const Footer = () => {
  return ( 
    <>
      <div className="mt-11 w-full px-11 py-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
        <div className="flex items-center justify-center gap-x-4 gap-y-6  flex-col">
          <img src="bebes.png" alt="bebes" className="w-auto" />
          <div className="text-center text-5xl text-violet-800">
            ¿Por qué usar BabyBloom?
          </div>
          <div className="text-center text-sm px-4 py-4 text-green-500">
            BabyBloom te brinda una herramienta confiable y completa para aumentar tus posibilidades de concebir, recibir apoyo durante el embarazo y comprender mejor tu salud reproductiva. Es una compañera confiable y valiosa en tu viaje hacia la maternidad.
          </div>
        </div>
        <div className="flex flex-col gap-y-2 gap-x-6">
          <div className="flex flex-col items-center justify-center gap-y-1">
            <img src="credibilidad.png" alt="credibilidad" className="w-32" />
            <div className="text-xl text-green-700">Credibilidad médica</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <img src="predicciones.png" alt="credibilidad" className="w-32" />
            <div className="text-xl text-green-700">Predicciones precisas</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <img src="privacidad.png" alt="credibilidad" className="w-32" />
            <div className="text-xl text-green-700">Privacidad</div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-gray-400 " />
      <div className="mt-4 mb-4 text-center text-gray-500 text-xl font-sans italic">
        2023 BabyBloom: Naciendo en el latir de un corazón. 
      </div>
    </>
    
   );
}
 
export default Footer;