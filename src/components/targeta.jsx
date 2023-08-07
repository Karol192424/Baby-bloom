// eslint-disable-next-line react/prop-types
const Targeta = ({img, titulo, contenido}) => {
  return ( 
    <div className="flex flex-col items-center justify-center gap-y-2" >
      <img src={`/${img}`} alt="reloj"  className="h-[140px]" />
      <div className="mt-6 rounded-[40px] border-4 border-pink-400 px-3 py-5 flex items-center justify-center text-xl sm:text-3xl text-center text-green-700 sm:min-h-[170px]
      ">
        {titulo}
      </div>
      <div className="mt-6 rounded-[40px] border-4 border-green-700 px-6 py-6 flex items-center justify-center text-sm sm:text-lg text-center text-pink-600 ">
        {contenido}
      </div>
      
    </div>
   );
}
 
export default Targeta;