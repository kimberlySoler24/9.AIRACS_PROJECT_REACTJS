import LayoutPrincipal from "../components/menu-principal/layout-principal";
import quienesSomos from "../components/menu-principal/array-quienes";
import nuestrosServicios from "../components/menu-principal/array-servicios";
import "./estilo-principal.css";
import { useState } from "react";

export default function PaginaPrincipal() {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarBotonCierre, setMostrarBotonCierre] = useState(false);
  const [botonactivo, setbotonactivo] = useState({ NIT: "", razonSocial: "", CIUDAD: "", DIRECCION: "", TELEFONO: "", EMAIL: "" });

  const handleChange = (evento) => {
    console.log(evento.target.value);
    setbotonactivo({
      ...botonactivo,
      [evento.target.name]: evento.target.value
    })
  }

  const onSubmit = () => {
    console.log(botonactivo)
  }

  return (
    <LayoutPrincipal login={false}>
      <div>
        <div className="bg-transparent h-64" id="img-div"></div>
        <div className="h-auto p-5 flex flex-col items-center justify-between border border-gray-100 shadow-xl  bg-white" id="quienes">
          <div className="mb-10 flex flex justify-center items-center mt-4 text-lg font-bold text-gray-900 text-center" id="titulo-quienes-nuestros"><h1 className="text-3xl">QUIÉNES SOMOS?</h1></div>
          <div className="flex flex-row justify-center items-center grid gap-4 lg:grid-cols-3  lg:grid-rows-1 sm:grid-rows-3 sm:grid-cols-1" id="bloques-quienes-nuestros">
            {quienesSomos.map(elemento => {
              return <QuienesSomos titulo={elemento.Titulo} descripcion={elemento.DESCRIPCION}></QuienesSomos>
            })}
          </div>
        </div>
        <div className="bg-transparent h-64" id="img-div" ></div>
        <div className="h-auto p-5 flex flex-col items-center justify-center border border-gray-100 shadow-xl  bg-white" id="nuestros">
          <div className="mb-10 flex flex justify-center items-center mt-4 text-lg font-bold text-gray-900 text-center" id="titulo-quienes-nuestros"><h1 className="text-3xl">NUESTROS SERVICIOS</h1></div>
          <div className="pr-8 flex flex-row justify-start grid gap-4 lg:grid-cols-3  lg:grid-rows-1 sm:grid-rows-3 sm:grid-cols-1 " id="bloques-quienes-nuestros">
            {nuestrosServicios.map(elemento => {
              return <NuestrosServicios imagen1={elemento.imagen1} titulo1={elemento.Titulo1} descripcion1={elemento.descripcion1}></NuestrosServicios>
            })}
          </div>
        </div>
        <div className="bg-transparent h-64" id="img1-div" ></div>
        <div className="bg-transparent flex items-baseline justify-center" id="img1-div">
          <div className=" bg-violet-400 w-2/5 py-10 px-10 shadow-xl">
            <div className="-mt-20 bg-white shadow-xl " id="contactanos">
              <form>
                <h3 className=" p-5 w-full text-center xl:text-3xl font-bold text-gray-900 lg:text-2xl">CONTACTANOS</h3>

                <label>
                  <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l" >NIT:</h3>
                </label>
                <input className=" mx-10 w-5/6 border to-black rounded-md bg-violet-100 flex items-stretch p-1"
                  placeholder="Escribe tu NIT" value={botonactivo.NIT} type="number" id="nit" name="NIT" onChange={handleChange} required /><br /><br />
              </form>

              <label>
                <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l">RAZON SOCIAL:</h3>
              </label>
              <input className=" mx-10 w-5/6 border to-black rounded-md bg-violet-100 flex items-stretch p-1 " placeholder="Escribe el nombre de la empresa" type="text" value={botonactivo.razonSocial} id="razon-social" name="razonSocial" onChange={handleChange} required /><br /><br />

              <label>
                <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l">CIUDAD:</h3>
              </label>
              <input className=" mx-10 w-5/6 border to-black rounded-md bg-violet-100 flex items-stretch p-1 " placeholder="Escribe ciudad de residencia" type="text" value={botonactivo.CIUDAD} id="ciudad" name="CIUDAD" onChange={handleChange} required /><br /><br />

              <label>
                <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l">DIRECCIÓN:</h3>
              </label>
              <input className="mx-10 w-5/6 border to-black rounded-md bg-violet-100 flex items-stretch p-1 " placeholder="Escribe tu dirección" type="text" value={botonactivo.DIRECCION} id="direccion" name="DIRECCION" onChange={handleChange} required /><br /><br />

              <label>
                <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l">TELÉFONO:</h3>
              </label>
              <input className=" mx-10 w-5/6 border to-black rounded-md bg-violet-100 flex items-stretch p-1 " placeholder="Escribe tu número de contacto" type="text" value={botonactivo.TELEFONO} id="telefono" name="TELEFONO" onChange={handleChange} required /><br /><br />

              <label>
                <h3 className="mx-10 my-1 text-lefth xl:text-xl font-bold text-gray-900 lg:text-l">CORREO ELECTRÓNICO:</h3>
              </label>
              <input className=" mx-10 w-5/6 to-black rounded-md bg-violet-100 flex items-stretch p-1" placeholder="Escribe tu correo corporativo" value={botonactivo.EMAIL} type="text" id="correo" name="EMAIL" onChange={handleChange} required /><br /><br />

              <div className="flex flex-row">
                <input className={`${botonactivo.button}  mx-10 w-5 border to-black rounded-md bg-indigo-200 p-1`} type="radio" id="agree" name="agree" onClick={() => onSubmit()} required /><br /><br />

                <label className="mr-10 my-1 mt-2  text-justify text-gray-500 xl:text-l lg:text-l md:text-sm sm:text-xs" required>Aceptar políticas de tratamiento de datos</label>

              </div>
              <div className="flex justify-center">
                <div>
                  {mostrarAlerta && (
                    <div className="flex flex-column bg-violet-100 border border-violet-400 text-violet-700 px-4 mx-10 py-3 rounded relative" role="alert">
                      <span className="block sm:inline"><strong className="font-bold">Información recibida!</strong> Nos contactaremos con usted los más pronto posible</span>
                      {mostrarBotonCierre && (
                        <button className="cerrar" onClick={() => setMostrarAlerta(false)}>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-violet-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                          </span>
                        </button>
                      )}
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2"
                      onClick={() => {
                        setMostrarAlerta(true);
                        setMostrarBotonCierre(true);
                      }}>
                      Enviar
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </LayoutPrincipal>
  );
}

function QuienesSomos(props) {
  return (
    <div
      className="bg-gradient-to-r from-violet-200 via-violet-500 to-violet-800 p-1 shadow-xl flex justify-center" id="bordeado"
    >
      <a className="block bg-white lg:p-8" href="">
        <div className="my-5 mx-2">
          <h3 className="text-center text-2xl font-bold text-gray-900">
            {props.titulo}
          </h3>

          <p className="mt-2 text-justify text-l text-gray-500">
            {props.descripcion}
          </p>
        </div>
      </a>
    </div>
  )
}

function NuestrosServicios(props) {
  return (

    <div className="ml-auto w-5/6 border-violet-500 border-x-violet-500 bg-white-800 border-4 border-violet-500 border-y-violet-500 p-4 flex items-center flex-col sm:mr-7">
      <div className="flex items-center gap-4">
        <img
          alt="rayosX"
          src={props.imagen1}
          className="flex h-24 w-24 rounded-full object-cover"
        />
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="block w-full h-full rounded-lg border border-violet-500 p-4 hover:border-red-500"
          >
            <p className="w-full text-center text-xl font-bold text-gray-900">{props.titulo1}</p>

            <p className="w-full mt-2 text-justify text-l text-gray-500">
              {props.descripcion1}
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}