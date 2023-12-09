function Footer() {
  return (
    <div className="bg-contain bg-center bg-no-repeat text-center lg:text-left">
      <div className="container p-6 text-gray-900">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 lg:mb-0">
            <h5 className="mb-2 font-medium uppercase">Disclaimer</h5>

            <p className="mb-4">
              Antes de usar CHATAPP, asegúrate de revisar y aceptar nuestras
              condiciones. Utiliza la aplicación con responsabilidad, evita
              acoso y ofensas. Aunque cuidamos tu privacidad, ten precaución al
              compartir información. No nos responsabilizamos por el contenido
              generado por usuarios ni garantizamos su precisión. CHATAPP es un
              entorno de prueba; la información aquí no es válida. Nos
              reservamos el derecho de hacer cambios y suspender cuentas según
              nuestras políticas. No asumimos responsabilidad por pérdidas o
              daños. Al usar CHATAPP, aceptas estos términos; si no estás de
              acuerdo, te recomendamos dejar de usar la aplicación. Para
              preguntas, contáctanos.
            </p>
          </div>

          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h5 className="mb-2 font-medium uppercase">Itsjuanit</h5>
            <p className="mb-4">
              Este sitio ha sido realizado con Vite, React, React-router-dom,
              Node.js, Tailwindcss, Socket.io, Axios, desplegado en Vercel el
              front y el backend en Render. Visitá{" "}
              <a
                href="https://portfolio-itsjuanit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-xl underline bold"
              >
                ITSJUANIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
