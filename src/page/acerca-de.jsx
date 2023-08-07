
const AcercaDe = () => {

  const navigate = (url)=>{
    window.location.href = url
  }

  return (
  <div className="px-11 py-11">
    <img
        onClick={() => navigate("https://www.guiainfantil.com/articulos/embarazo/dietas/menu-para-embarazadas-semana-1-a-4/", { target: "_blank" })}
      src="comerMama.jpg"
      alt="comer mamá"
      className="mx-auto hover:cursor-pointer"
    />
      <img
        onClick={() => navigate("https://www.canva.com/design/DAFqQ2sNnW4/7RE_DIIPrLIYH-JVUdbClg/edit", { target: "_blank" })}
        src="logo.png"
        alt="comer mamá"
        className="mx-auto hover:cursor-pointer "
      />
  </div> );
}
 
export default AcercaDe;