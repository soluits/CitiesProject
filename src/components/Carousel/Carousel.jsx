import "./carousel.css";
import { useState, useEffect } from "react";

const Carousel = () => {
  let [contador, setContador] = useState(0);
  const [datos, setDatos] = useState([]);
  const data2 = datos.filter((grupo) => grupo.group == contador);
  const prev = () => {
    if ( contador < 0 || contador == 0){
      setContador(data2.length - 2 )
    } else {
      setContador(contador - 1);
    }
  };
  useEffect(() => {
    fetch("cities.json")
      .then((response) => response.json())
      .then((data) => setDatos(data.cities));
  }, []);

  const next = () => {
    
    if (contador == 2 ) {
      setContador(0);
    } else  {
      setContador(contador + 1);
    }
  };
   console.log("contador = ", contador);

  // console.log("paises del contador ", contador + data2);
  const datos3 = datos.length > 0 && data2.length > 0 && contador <= 3;
  // console.log(datos3)
  return (
    <>
    <div className="carousel">
    <div className="sliderContainer">
      <div className="container-carrousel">
       {datos.length > 0 && data2.length > 0 && contador <= 3 ? (
          <>
        <article>
          <p className="location-title">{data2[0].name}</p>
              <img className="img-carousel" src={data2[0].photo} alt=""></img>
  
        </article>
        <article>
          <p className="location-title">{data2[1].name}</p>
              <img className="img-carousel" src={data2[1].photo} alt=""></img>
  
        </article>
        <article>
          <p className="location-title">{data2[2].name}</p>
              <img className="img-carousel" src={data2[2].photo} alt=""></img>
  
        </article>
        <article>
          <p className="location-title">{data2[3].name}</p>
          <img className="img-carousel" src={data2[3].photo} alt=""></img>
        </article>
         </>
        ) : (
          <h2> Cargando... </h2>
        )}
      </div>
      <div className="prev" onClick={prev}> {"<"} </div>
      <div className="next" onClick={next}> {">"} </div>
    </div>
  </div>
  </>
  );
};

export default Carousel;