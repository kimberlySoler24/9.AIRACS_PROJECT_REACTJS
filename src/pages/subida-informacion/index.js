import LayoutPrincipal from "@/components/menu-principal/layout-principal";
import "./globals.css"
import { useState } from "react";

export default function UploadData() {

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarBotonCierre, setMostrarBotonCierre] = useState(false);
    const [botonactivo, setbotonactivo] = useState(
        { NOMBRES: "", APELLIDOS: "", tipoDocumento: "", numeroCedula: "", SEXO: "", EDAD: "", ALTURA: "", PESO: "", SERVICIO: "", PROCEDIMIENTO: "", ESTUDIO: "", ZONA: "", EQUIPO: "", MARCA: "", MODELO: "", SERIAL: "", CONSULTORIO: "", FECHA: "", DOSIS: "", TotalDosis: "", KV: "", MA: "", TIEMPO: "", BUENAS: "", MALAS: "", TOTAL: "", CAUSA: "", NombreProfesional: "", CedulaProfesional: "", CARGO: "", IMAGEN: "" });

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
        <LayoutPrincipal login={true}>
            <div className="bg-white  ">
                {/* <form action="/visualizacion"> */}
                <form>
                    <div>
                        <strong className="flex justify-center uppercase underline my-2 text-2xl">
                            Registro pacientes
                        </strong>
                    </div>
                    <section>
                        <div className="border-2 border-violet-500 my-2 mx-20 p-2">
                            <p className="mx-20 font-bold text-xl">Información del paciente:</p>
                            <div className="flex justify-start flex-between ms-auto mr-3 py-2 flex  md:flex-wrap sm:flex-wrap">
                                <div className="ml-6">
                                    <label className="uppercase font-bold">
                                        Nombres:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1 ms-auto mr-3"
                                        placeholder="Escribe tus nombres"
                                        name="NOMBRES"
                                        value={botonactivo.NOMBRES}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div>
                                    <label className="uppercase font-bold">
                                        Apellidos:
                                    </label>
                                    <br />
                                    <input
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        type="text"
                                        placeholder="Escribe tus apellidos"
                                        name="APELLIDOS"
                                        value={botonactivo.APELLIDOS}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="ml-6">
                                    <label className="uppercase font-bold">
                                        Tipo de documento:
                                    </label>
                                    <br />

                                    <select className="border to-black rounded-md bg-violet-100 p-1.5" id="id" name="tipoDocumento" value={botonactivo.tipoDocumento} onChange={handleChange}>
                                        <option value="tj-id">Tarjeta de identidad</option>
                                        <option value="cc">Cedula</option>
                                        <option value="Pasaporte">Pasaporte</option>
                                        <option value="Otro">Otro Documento</option>
                                    </select>
                                </div>
                                <div className="ml-6">
                                    <label className="uppercase font-bold mr-3">
                                        Numero de documento:
                                    </label>
                                    <br />
                                    <input
                                        className="border to-black rounded-md bg-violet-100 ms-auto mr-3 p-1"
                                        type="number"
                                        placeholder="Escribe tu documento"
                                        name="numeroCedula"
                                        value={botonactivo.numeroCedula}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="ml-6">
                                    <label className="uppercase font-bold" >
                                        Sexo:
                                    </label>
                                    <br />
                                    <select className="border to-black rounded-md bg-violet-100 p-1.5" id="id" name="SEXO" value={botonactivo.SEXO} onChange={handleChange}>
                                        <option value="F">Femenino</option>
                                        <option value="M">Másculino</option>
                                    </select>
                                </div>
                            </div>

                            <div
                                name="Linea # 2"
                                className="flex justify-start space-x-6 flex  md:flex-wrap sm:flex-wrap"
                            >
                                <div className="ml-6">
                                    <label className="uppercase font-bold">
                                        Edad:
                                    </label>
                                    <br />
                                    <input
                                        type="number"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="Escribe tu edad"
                                        name="EDAD"
                                        value={botonactivo.EDAD}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div className="ml-0">
                                    <label className="uppercase font-bold ml-0" >
                                        Altura:
                                    </label>
                                    <br />
                                    <input
                                        type="number"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="Escribe tu altura"
                                        name="ALTURA" value={botonactivo.ALTURA} onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div className="ml-0">
                                    <label className="uppercase font-bold">
                                        Peso:
                                    </label>
                                    <br />
                                    <input
                                        type="number"
                                        className=" border to-black rounded-md bg-violet-100 ms-auto mr-3 p-1  "
                                        placeholder="Escribe tu peso"
                                        name="PESO" value={botonactivo.PESO} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="border-2 border-violet-500 my-2 mx-20 p-2">
                            <p className="mx-20 font-bold text-xl">Información del servicio:</p>
                            <div className="flex justify-start space-x-6 mx-20 flex  md:flex-wrap sm:flex-wrap ms-auto mr-3">
                                <div className="ml-6">
                                    <label className="uppercase font-bold" >
                                        Servicio:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="Escribe el servicio"
                                        name="SERVICIO" value={botonactivo.SERVICIO} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div>
                                    <label className="uppercase font-bold" >
                                        Procedimiento a realizar:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="Escribe el procedimiento"
                                        name="PROCEDIMIENTO" value={botonactivo.PROCEDIMIENTO} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="mx-0">
                                    <label className="uppercase font-bold ml-0" >
                                        Tipo de estudio:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1 ms-auto mr-3"
                                        placeholder="Escribe el tipo de estudio"
                                        name="ESTUDIO" value={botonactivo.ESTUDIO} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div>
                                    <label className="uppercase font-bold" >
                                        zona bucal:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="zonas bucales tomada"
                                        name="ZONA" value={botonactivo.ZONA} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="border-2 border-violet-500 my-2 mx-20 p-2">
                            <p className="mx-20 font-bold text-xl">Información del equipo:</p>
                            <div className="flex justify-start space-x-6 flex  md:flex-column sm:flex-wrap">
                                <div className="ml-6">
                                    <label className="uppercase font-bold" >
                                        Equipo:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1 ms-auto mr-3"
                                        placeholder="Nombre del equipo"
                                        name="EQUIPO" value={botonactivo.EQUIPO} onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div>
                                    <label className="uppercase font-bold" >
                                        Marca:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="escribe la marca"
                                        name="MARCA" value={botonactivo.MARCA} onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div className="ml-0">
                                    <label className="uppercase font-bold">
                                        Modelo:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1 ms-auto mr-3"
                                        placeholder="escribe el modelo"
                                        name="MODELO" value={botonactivo.MODELO} onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div className="">
                                    <label className="uppercase font-bold">
                                        Serial:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="escribe el serial"
                                        name="SERIAL" value={botonactivo.SERIAL} onChange={handleChange}
                                    />
                                    <br />
                                </div>

                                <div>
                                    <label className="uppercase font-bold" >
                                        Consultorio:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border to-black rounded-md bg-violet-100 p-1"
                                        placeholder="ubicación del equipo"
                                        name="CONSULTORIO" value={botonactivo.CONSULTORIO} onChange={handleChange}
                                    />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="border-2 border-violet-500 my-2 mx-20 p-2 ">
                            <p className="mx-20 font-bold text-xl">Información del estudio:</p>
                            <div className="grid lg:grid-cols-4 gap-4 grid md:grid-cols-1 ml-6">
                                <div className="sm:text-center md:text-center">
                                    <div>
                                        <label className="uppercase font-bold">
                                            Fecha Toma:
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            name="FECHA" value={botonactivo.FECHA} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <div>
                                        <label className="uppercase font-bold" >
                                            Dosis:
                                        </label>
                                        <br />
                                        <input
                                            type="number"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="Cantidad dosis"
                                            name="DOSIS" value={botonactivo.DOSIS} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <div>
                                        <label className="uppercase font-bold" >
                                            Total Dosis:
                                        </label>
                                        <br />
                                        <input
                                            type="number"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="total dosis recibida"
                                            name="TotalDosis" value={botonactivo.TotalDosis} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                </div>
                                <div className="sm:text-center md:text-center">
                                    <p className="font-bold text-lg">Técnica de la imagen:</p>
                                    <div>
                                        <label className="uppercase font-bold">
                                            kV :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="voltaje del tubo"
                                            name="KV" value={botonactivo.KV} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <label className=" font-bold" >
                                            mA :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="corriente del tubo"
                                            name="MA" value={botonactivo.MA} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="font-bold">
                                            t(s) :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="tiempo expuesto"
                                            name="TIEMPO" value={botonactivo.TIEMPO} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                </div>
                                <div className="sm:text-center md:text-center">
                                    <p className="font-bold text-lg">Número de tomas:</p>
                                    <div>
                                        <label className="uppercase font-bold" >
                                            Buenas :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="Número tomas buenas"
                                            name="BUENAS" value={botonactivo.BUENAS} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="uppercase font-bold" >
                                            Malas :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="Número tomas malas"
                                            name="MALAS" value={botonactivo.MALAS} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="uppercase font-bold">
                                            Total :
                                        </label>

                                        <input
                                            type="text"
                                            className="border to-black rounded-md bg-violet-100 p-1"
                                            placeholder="Número total de tomas"
                                            name="TOTAL" value={botonactivo.TOTAL} onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                </div>
                                <div className="sm:text-center md:text-center">
                                    <p className="font-bold text-lg">Causa repetición:</p>
                                    <div>
                                        <textarea className=" bg-violet-100 p-1" rows="6" placeholder="Describa la causa que generó más de una toma" name="CAUSA" value={botonactivo.CAUSA} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="border-2 border-violet-500 my-2 mx-20 p-2">
                            <div className="grid lg:grid-cols-2 gap-4 grid md:rows-2 gap-4 ">
                                <div>
                                    <p className="font-bold text-lg">
                                        Datos profesional que realiza estudio
                                    </p>
                                    <div className="border-2 border-violet-500 p-4">
                                        <div>
                                            <label className="uppercase font-bold" >
                                                Nombre Completo:
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                className="border to-black rounded-md bg-violet-100 p-1 w-2/4"
                                                placeholder="Ingrese nombre completo"
                                                name="NombreProfesional" value={botonactivo.NombreProfesional} onChange={handleChange}
                                            />
                                            <br />
                                        </div>
                                        <div>
                                            <label className="uppercase font-bold" >
                                                Cedula:
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                className="border to-black rounded-md bg-violet-100 p-1 w-2/4"
                                                placeholder="Ingrese Cedula"
                                                name="CedulaProfesional" value={botonactivo.CedulaProfesional} onChange={handleChange}
                                            />
                                            <br />
                                        </div>
                                        <div>
                                            <label className="uppercase font-bold">
                                                Cargo:
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                className="border to-black rounded-md bg-violet-100 p-1 w-2/4"
                                                placeholder="Ingrese su cargo"
                                                name="CARGO" value={botonactivo.CARGO} onChange={handleChange}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Subir imagen</p>
                                    <div className="border-2 border-violet-500 p-20">
                                        <input
                                            type="file"
                                            className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                       file:bg-violet-200 file:text-violet-700
                       hover:file:bg-violet-100S
                       p-2
                        "
                                            name="IMAGEN" value={botonactivo.IMAGEN} onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>

                <div className="grid grid-rows-2">
                    <div>
                    {mostrarAlerta && (
                        <div className="flex flex-column bg-violet-100 border border-violet-400 text-violet-700 px-4 mx-20 py-3 rounded relative" role="alert">
                            <span className="block sm:inline"><strong className="font-bold">NOTA!:</strong> Los datos del paciente se han guardado correctamente</span>
                            {mostrarBotonCierre && (
                                <button className="cerrar" onClick={() => setMostrarAlerta(false)}>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <svg className="fill-current h-6 w-6 text-violet-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                    </span>
                                </button>
                            )}
                        </div>
                    )}
                    </div>
                    <div className="flex flex-row justify-center">
                    <button className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2" onClick={() => onSubmit()}>
                        Guardar
                    </button>
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
        </LayoutPrincipal>
    );
}
