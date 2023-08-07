import { useState } from "react";

const useParto = () => {
  const [fechaPreviaParto, setFechaPreviaParto] = useState("");
  const [tiempoEmbarazoSemanas, setTiempoEmbarazoSemanas] = useState("");
  const [fechaConcepcion, setFechaConcepcion] = useState("");

  const calcularFechas = (fechaUltimoPeriodo, duracionCiclo) => {
    if (!fechaUltimoPeriodo || !duracionCiclo) return;

    // Convertir fecha último periodo a Date
    const fechaUltimoPeriodoDate = new Date(fechaUltimoPeriodo);

    // Calcular fecha de ovulación
    const fechaOvulacionDate = new Date(
      fechaUltimoPeriodoDate.getTime() + duracionCiclo / 2 * 24 * 60 * 60 * 1000
    );

    // Calcular fecha previa al parto (~266 días después de ovulación)
    const fechaPreviaPartoDate = new Date(
      fechaOvulacionDate.getTime() + 266 * 24 * 60 * 60 * 1000
    );

    // Calcular semanas de embarazo hasta hoy
    const calcularSemanasEmbarazo = (fechaOvulacionEstimada) => {
      const hoy = new Date();

      const diferenciaMs = hoy - fechaOvulacionEstimada;
      const semanasEmbarazo = Math.round(diferenciaMs / (7 * 24 * 60 * 60 * 1000 ));

      console.log(fechaOvulacionEstimada)
      console.log(hoy)
      console.log(semanasEmbarazo)


      return semanasEmbarazo;

    }

    const fechaConcepcionMaxDate = new Date(
      fechaOvulacionDate.getTime() + 1 * 24 * 60 * 60 * 1000
    );

    // Formatear fechas
    const fechaPreviaPartoFormateada = fechaPreviaPartoDate.toISOString().split("T")[0];
    const fechaConcepcionMinFormateada = fechaOvulacionDate.toISOString().split("T")[0];
    const fechaConcepcionMaxFormateada = fechaConcepcionMaxDate.toISOString().split("T")[0];
    const semanasEmbarazo = calcularSemanasEmbarazo(fechaUltimoPeriodoDate)

    // console.log(semanasEmbarazo)

    setFechaPreviaParto(fechaPreviaPartoFormateada);
    
    setFechaConcepcion({
      min: fechaConcepcionMinFormateada,
      max: fechaConcepcionMaxFormateada
    });
    setTiempoEmbarazoSemanas(semanasEmbarazo);
  };

  return {
    calcularFechas,
    fechaPreviaParto,
    tiempoEmbarazoSemanas,
    fechaConcepcion
  };
}

export default useParto;