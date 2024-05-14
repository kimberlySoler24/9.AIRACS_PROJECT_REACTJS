import "./globals.css";
import LayoutPrincipal from "../../components/menu-principal/layout-principal";
import usuarios from "./array-objetos";


export default function Vizualizacion() {

  return (
    <LayoutPrincipal login={true}>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul className="grid gap-4 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {usuarios.map((user) => {
              return <Card user={user}></Card>;
            })}
          </ul>
        </div>
      </section>
    </LayoutPrincipal>
  );
}

function Card(props) {
  return (
    <li key={props.user.ID}>
      <div
       
        className="bg-white border-2 border-violet-300 block rounded-lg p-4 shadow-lg shadow-indigo-100"
      >
        <img
          alt="Home"
          src={props.user.IMAGENES}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
          <div>
              <dt className="sr-only">Address</dt>

              <dd className="text-black text-center font-medium">
                {props.user.NOMBRES}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Address</dt>

              <dd className="text-black text-center font-medium">
                {props.user.APELLIDOS}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500 text-center">
                ID {props.user.ID}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs justify-center">
            <a href={`/interpretacion/${(props.user.INDEX)}`} className="rounded-full bg-violet-500 text-white hover:bg-violet-200 hover:text-black p-4 my-2">
              Visualizar paciente
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
