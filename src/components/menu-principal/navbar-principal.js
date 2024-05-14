import Imagen from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function NavbarPrincipal(props) {
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 lg:h-16  md:h-16 sm:h-60">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Inicio</span>
          <div className="flex flex-row justify-center items-center text-5xl">
            <div>
              <Imagen
                className="logo-compania"
                src="/imagenes/logo.jpg"
                alt="logo"
                width={65}
                height={65}
              ></Imagen>
            </div>
            <div>
              <h1 className="text-[#B799FF] font-bold">AIRACS</h1>
            </div>
          </div>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {props.login ? (
                <>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/subida-informacion"
                    >
                      Subida de información
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/visualizacion"
                    >
                      Visualización información paciente
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/#quienes"
                    >
                      ¿Quiénes Somos?
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/#nuestros"
                    >
                      Nuestros servicios
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-violet-600"
                      href="/#img1-div"
                    >
                      Contáctanos
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {props.login ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#B799FF] transition hover:text-black hover:text-violet-600 sm:block"
                  href="/"
                >
                  Cerrar sesión
                </a>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-[#B799FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-100 hover:text-violet-600"
                  href="/inicio-sesion"
                >
                  Iniciar sesión
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#B799FF] transition hover:text-violet-600 sm:block"
                  href="/"
                >
                  Registrarse
                </a>
              </div>
            )}

            {/* Menú responsive */}

            {/* <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            </button> */}

<div className="flex h-min w-64 px-1 mt-1 md:hidden">
      <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">

      <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span className="text-sm font-medium"> Inicio </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                href="/#quienes"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>


                <span className="text-sm font-medium"> ¿Quienés somos? </span>
              </Link>

              <Link
                href="/#nuestros"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>


                <span className="text-sm font-medium"> Nuestros Servicios </span>
              </Link>

              <Link
                href="/#img1-div"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>


                <span className="text-sm font-medium"> Contáctanos </span>
              </Link>
            </nav>
          </details>
       </nav>
    </div>

          </div>
        </div>
      </div>
    </header>
  );
}
