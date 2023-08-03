import "./App.css"
import Tarjeta from "./components/tarjeta";

const App = () => {
  return ( 
    <div className="px-10 sm:px-16 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 ">
        <div className="text-5xl lg:text-6xl xl:text-7xl text-center min-h-[30vh] ">
          <div className="px-6 text-pink-900 ">
            LA MEJOR APLICACION PARA EL SEGUIMIENTO DEL PERIAODO OVULACION Y GESTION DEL MUNDO
          </div>
          <div className="bg-pink-900 text-white text-xl mt-6 p-3">
            TU ALIADA COMPLETA PARA ELL SEGUIMIENTO MENSTRUAL Y GESTACIONAL CONECTANDO CLICOS Y CREANDO FUTUROS
          </div>
        </div>
        <div className="hidden lg:flex gap-x-4 w-auto">
          <img
            src="./img.png"
            alt="mujer embarazada"
            className="w-auto max-w-[300px]"
          />
          <img
            src="./img2.png"
            alt="mujer embarazada"
            className="w-auto max-w-[300px]"
          />
        </div>
      </div>
      <hr className="mt-24 border-2 border-gray-400" />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-16">
        <Tarjeta
          img="reloj.png"
          titulo="Conoce tus ciclos y vive tu mejor version"
          contenido="Descubre la Magia de Tu Ciclo: Conoce tu Cuerpo y Potencia tu Bienestar
        Conéctate Contigo Misma: Entiende cómo tu ciclo impacta tu estado de ánimo y energía a través del seguimiento de tus periodos y ovulación."
        />
        <Tarjeta
          img="baby.png"
          titulo="Tu Compañera Confiable en el Embarazo: Cuidado y Conexión en Cada Etapa"
          contenido="Bienestar para Mamá y Bebé: Con el modo embarazo de BabyBloom, recibe apoyo y conocimiento sobre el crecimiento semanal de tu bebé y recordatorios importantes."
        />
        <Tarjeta
          img="manos.png"
          titulo="Potencia tu Fertilidad: Descubre tus Mejores Oportunidades con BabyBloom"
          contenido="Encuentra la Sincronía Perfecta: BabyBloom te brinda información clave para aumentar tus posibilidades de embarazo y lograr ese anhelado sueño de ser madre."
        />
      </div>
    </div>
   );
}
 
export default App;