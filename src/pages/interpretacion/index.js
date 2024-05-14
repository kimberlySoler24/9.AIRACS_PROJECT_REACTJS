import "./globals.css";
import LayoutPrincipal from "@/components/menu-principal/layout-principal";
import radiografiasPacientes from "./array-objetos";

export default function Interpretacion() {
  return (
    <LayoutPrincipal login={true}>
      <div className="bg-white">
        <form action="/subida-informacion">
          <div>
            <strong className="flex justify-center uppercase underline py-4 text-2xl">
              Información del paciente
            </strong>
          </div>
          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 ">
              <p className="mx-20 font-bold text-xl">
                Información del paciente:
              </p>
              <div className="flex justify-start py-2   md:flex-wrap grid-cols-2 sm:flex-wrap ">
                <div className="ml-6">
                  <label className="uppercase font-bold" for="nombre">
                    Nombres:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].NOMBRES}
                  />
                  <br />
                </div>
                <div className="ml-6">
                  <label className="uppercase font-bold" for="apellido">
                    Apellidos:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    type="text"
                    value={radiografiasPacientes[0].APELLIDOS}
                  />
                  <br />
                </div>
                <div className="ml-6" >
                  <label className="uppercase font-bold" for="id">
                    Tipo de identidad:
                  </label>
                  <br />

                  <select
                    className="border to-black bg-violet-100 p-1.5"
                    id="id"
                  >
                    <option value={radiografiasPacientes[0].TipoDocumento}>
                      Cedula
                    </option>
                    <option value="tj-id">Tarjeta de identidad</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Otro">Otro Documento</option>
                  </select>
                </div>
                <div className="ml-6" >
                  <label className="uppercase font-bold" for="#id">
                    Documento de identidad:
                  </label>
                  <br />
                  <input
                    className="border to-black rounded-md bg-violet-100 p-1"
                    type="number"
                    value={radiografiasPacientes[0].ID}
                  />
                  <br />
                </div>
                <div className="ml-6">
                  <label className="uppercase font-bold" for="sexo">
                    Sexo:
                  </label>
                  <br />
                  <select
                    className="border to-black bg-violet-100 p-1.5 "
                    id="id"
                  >
                    <option value="F">Femenino</option>
                    <option value="M">Másculino</option>
                  </select>
                </div>
              </div>

              <div
                name="Linea # 2"
                className="flex justify-start flex md:flex-wrap  sm:flex-wrap "
              >
                <div className="ml-6">
                  <label className="uppercase font-bold" for="edad">
                    Edad:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].EDAD}
                  />
                  <br />
                </div>

                <div className="ml-6">
                  <label className="uppercase font-bold" for="altura">
                    Altura:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].ALTURA}
                  />
                  <br />
                </div>

                <div className="ml-6">
                  <label className="uppercase font-bold" for="peso">
                    Peso:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].PESO}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2">
              <p className="mx-20 font-bold text-xl">
                Información del servicio:
              </p>
              <div className="flex justify-start space-x-6 flex md:flex-wrap sm:flex-wrap ">
                <div className="ml-6">
                  <label className="uppercase font-bold" for="servicio">
                    Servicio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].SERVICIO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="procedimiento">
                    Procedimiento a realizar:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].PROCEDIMIENTO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="estudio">
                    Tipo de estudio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].ESTUDIO}
                  />
                  <br />
                </div>
                <div>
                  <label className="uppercase font-bold" for="servicio">
                    ZONA BUCAL:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].ZONA}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2">
              <p className="mx-20 font-bold text-xl">Información del equipo:</p>
              <div className="flex justify-start space-x-6 flex md:flex-wrap sm:flex-wrap">
                <div className="ml-6">
                  <label className="uppercase font-bold" for="equipo">
                    Equipo:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].EQUIPO}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="marca">
                    Marca:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].MARCA}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="modelo">
                    Modelo:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].MODELO}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="serial">
                    Serial:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].SERIAL}
                  />
                  <br />
                </div>

                <div>
                  <label className="uppercase font-bold" for="consultorio">
                    Consultorio:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border to-black rounded-md bg-violet-100 p-1"
                    value={radiografiasPacientes[0].CONSULTORIO}
                  />
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 ">
              <p className="mx-20 font-bold text-xl">
                Información del estudio:
              </p>
              <div className="grid lg:grid-cols-4 gap-4 grid md:grid-cols-1">
                <div className="lg:text-left ">
                  <div className="ml-0">
                    <label className="uppercase font-bold" for="fecha">
                      Fecha Toma:
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].FECHA}
                    />
                    <br />
                  </div>
                  <div>
                    <label className="uppercase font-bold" for="dosis">
                      Dosis:
                    </label>
                    <br />
                    <input
                      type="number"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].DOSIS}
                    />
                    <br />
                  </div>
                  <div>
                    <label className="uppercase font-bold" for="totalDosis">
                      Total Dosis:
                    </label>
                    <br />
                    <input
                      type="number"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].totalDosis}
                    />
                    <br />
                  </div>
                </div>
                <div className="sm:text-center md:text-center">
                  <p className="font-bold text-lg">Técnica de la imagen:</p>
                  <div>
                    <label className="uppercase font-bold" for="totalDosis">
                      KV :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].KV}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className=" font-bold" for="ma">
                      mA :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].MA}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="font-bold" for="t(s)">
                      t(S) :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].TIEMPO}
                    />
                    <br />
                  </div>
                </div>
                <div className="lg:text-left sm:text-center md:text-center">
                  <p className="font-bold text-lg">Número de tomas:</p>
                  <div>
                    <label className="uppercase font-bold" for="buenas">
                      Buenas :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].tomasBuenas}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="uppercase font-bold" for="mala">
                      Malas :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].tomasMalas}
                    />
                    <br />
                  </div>
                  <br />
                  <div>
                    <label className="uppercase font-bold" for="Total">
                      Total :
                    </label>

                    <input
                      type="text"
                      className="border to-black rounded-md bg-violet-100 p-1"
                      value={radiografiasPacientes[0].TOTAL}
                    />
                    <br />
                  </div>
                </div>
                <div className="sm:text-center md:text-center">
                  <p className="font-bold text-lg">Causa repetición:</p>
                  <div>
                    <textarea
                      className="border to-black rounded-md bg-violet-100 p-1"
                      rows="6"
                      value={radiografiasPacientes[0].causaRepeticion}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-2 border-violet-500 my-2 mx-20 flex  md:flex-wrap sm:flex-wrap md:justify-center sm:justify-center h-min">
              <div className="grid lg:grid-cols-2 flex md:flex-column">
                <div>
                  <p className="font-bold text-lg">
                    Información quién realiza la muestra
                  </p>
                  <div className="border-2 border-violet-500 p-4 lg:ml-0 md:ml-20 sm:ml-20 w-fit">
                    <div className="">
                      <label className="uppercase font-bold" for="nombre">
                        Nombre Completo:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].NombreProfesional}
                      />
                      <br />
                    </div>
                    <div>
                      <label className="uppercase font-bold" for="cc">
                        Cedula:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].documentoProfesional}
                      />
                      <br />
                    </div>
                    <div>
                      <label className="uppercase font-bold" for="cargo">
                        Cargo:
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border to-black rounded-md bg-violet-100 p-1"
                        value={radiografiasPacientes[0].cargoProfesional}
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="ml-auto mr-0">
                  <p className="font-bold text-lg " >Imágen del paciente</p>
                  <div className=" border-2 border-violet-500 ">
                    <div className="">
                      <img
                        src={radiografiasPacientes[0].IMAGENES}
                        alt="Descripción de la imagen"
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

 <section>
            <div className="border-2 border-violet-500 my-2 mx-20 p-2 md:flex-wrap sm:flex-wrap md:justify-center sm:justify-center h-min">
              <p className="mx-20 font-bold text-xl">Interpretación :</p>
              <div className="lg:flex justify-start md:flex-wrap">
                <div className="mx-6">
                  <label className="uppercase font-bold" for="diagnostico">
                    DIAGNOSTICO PRINCIPAL DEL PACIENTE:
                  </label>
                  <br />

                  <textarea
                    type="text"
                    className=" border to-black  bg-violet-100 p-1 w-full text-center"
                    placeholder="Escriba el diagnóstico"
                  ></textarea>

                  <br />
                </div>

                <div className="mx-6">
                  <label className="uppercase font-bold" for="marca">
                    NOMBRE DEL PROFESIONAL QUE SOLICITA LA RADIOGRAFIA:
                  </label>
                  <br />
                  <input
                    type="text"
                    className=" border to-black  bg-violet-100 w-full text-center py-1"
                    placeholder="Nombre del profesional"
                  />
                  <br />
                </div>

                <div className="mx-6">
                  <label className="uppercase font-bold" for="marca">
                    SUCURSAL DE LA TOMA:{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    className=" border to-black  bg-violet-100 p-1 w-full "
                    placeholder="Sucursal de la toma"
                  />
                  <br />
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <div className="flex justify-start flex-wrap mx-6 sm:grid grid-cols-1 flex justify-center md:grid-cols-2 " >
                <div className="mr-6">
                  <label className="uppercase font-bold" for="diagnostico">
                    PROFESIONAL QUE INTERPRETA LA RADIOGRAFIA:
                  </label>
                  <br />

                  <input
                    type="text"
                    className=" border to-black   bg-violet-100 p-1 w-full text-center"
                    placeholder="Nombre de profesional"
                  />

                  <br />
                </div>

                <div className="w-fit">
                  <label className="uppercase font-bold" for="marca">
                    FECHA DE INTERPRETACION:{" "}
                  </label>
                  <br />
                  <input
                    type="date"
                    className=" border to-black   bg-violet-100 w-full text-center py-1"
                  />
                  <br />
                </div>
              </div>

              <div className="mx-6 pt-5">
                <label className="uppercase font-bold" for="marca">
                  INTERPRETACION DE LA RADIOGRAFIA POR PARTE DEL PROFESIONAL:{" "}
                </label>
                <br />
              <textarea
                   type="text"
                   className=" border to-black   bg-violet-100 p-2 w-full h-40 text-center"
                   placeholder="Interpretación  del profesional"
              >

              </textarea>
                <br />
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <button className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2">
              Enviar información
            </button>
          </div>
        </form>
      </div>
    </LayoutPrincipal>
  );
}
