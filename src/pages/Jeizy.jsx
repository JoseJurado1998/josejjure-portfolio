import React from 'react'
//Jeizy
import banner1 from '../assets/jeizy/banner1.jpg'
import hero from '../assets/jeizy/hero.png'
import users from '../assets/jeizy/users.png'
import productos from '../assets/jeizy/productos.png'
import administrador from '../assets/jeizy/administrador.png'
import contacto from '../assets/jeizy/contacto.png'
//ScreenShots
import imagen1 from '../assets/jeizy/screenshots/1.png'
import imagen2 from '../assets/jeizy/screenshots/2.png'
import imagen3 from '../assets/jeizy/screenshots/3.png'
import imagen4 from '../assets/jeizy/screenshots/4.png'
import imagen5 from '../assets/jeizy/screenshots/5.png'
import imagen6 from '../assets/jeizy/screenshots/6.png'
import imagen7 from '../assets/jeizy/screenshots/7.png'
import imagen8 from '../assets/jeizy/screenshots/8.png'
import imagen9 from '../assets/jeizy/screenshots/9.png'
import imagen10 from '../assets/jeizy/screenshots/10.png'

//Icons
import { Button } from 'flowbite-react';
import react from '../assets/icons/react.png'
import django from '../assets/icons/django.png'
import tailwind from '../assets/icons/tailwind.png'
import mysql from '../assets/icons/mysql.png'

const Jeizy = () => {
  return (
    <>
      <main className='bg-gray-100 text-gray-800'>

        {/** Banner */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${banner1}')`
            }}>
            <span className="w-full h-full absolute opacity-50 bg-sky-950"></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="sm:pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Jeizzy e-commerce
                  </h1>
                  <p className="mt-4 text-lg text-fuchsia-100">
                    Proyecto de tienda de productos de peluquería online.
                  </p>
                  <div className='w-full flex flex-col mx-auto justify-center mt-3'>
                    <a href='https://jeizy.netlify.app/' className='mx-auto'>
                      <Button className='bg-sky-500 hover:bg-sky-700'>Ir a la demo</Button>
                    </a>
                    <span className='text-red-500 mt-2'>Servidor Django/Mysql Inactivo</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/** */}
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              {/** S1 */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-award"></i>
                    </div> */}
                    <div class="mx-4 text-center inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-green-200 bg-opacity-90">
                      <img class="h-full w-full object-cover p-1" src={django} alt="Image" />
                    </div>
                    <div class="text-center inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-green-200 bg-opacity-90">
                      <img class="h-full w-full object-cover p-1" src={mysql} alt="Image" />
                    </div>

                    <h6 className="text-xl font-semibold">Django / MySQL</h6>
                    <ul className="text-gray-600 mt-4 text-left mx-auto">
                      <li>-Uso de DRF para API REST</li>
                      <li>-Uso de Django ORM</li>
                      <li>-Creación de Modelos</li>
                      <li>-Migraciones a bbdd</li>
                      <li>-Definición vistas(urls) get/put/post/delete</li>
                      <li>-Serialización de datos</li>
                      <li>-JWT para autenticación</li>
                      <li>-Control de Imágenes para la apliación</li>
                      <li>-Control de errores</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/** S2 */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div class="text-center inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-sky-100 bg-opacity-90">
                      <img class="h-full w-full object-cover p-1" src={react} alt="Image" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      React.js
                    </h6>
                    <ul className="text-gray-600 mt-4 text-left mx-auto">
                      <li>-Uso de componentes funcionales</li>
                      <li>-Uso de react-router-dom</li>
                      <li>-Rutas protegidas</li>
                      <li>-Login/Registro</li>
                      <li>-Hooks</li>
                      <li>-CRUD de administrador:</li>
                      <li>Mensajes, Productos, Usuarios y Pedidos</li>
                      <li>-Http Requests</li>
                      <li>-Control de errores</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/** S3 */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div class="text-center inline-flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-pink-200 bg-opacity-90">
                      <img class="h-full w-full object-cover p-1" src={tailwind} alt="Image" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Tailwind Css
                    </h6>
                    <ul className="text-gray-600 mt-4 text-left mx-auto">
                      <li>-Diseño responsive</li>
                      <li>-Diseño mobile first</li>
                      <li>-Paleta de color atractiva</li>
                      <li>-Contraste</li>
                      <li>-Tipografía</li>
                      <li>-Uso intencionado de los espacios en blanco</li>
                      <li>-Retoque y uso de imágenes atractivas</li>
                      <li>-Jerarquía visual</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves
                  to any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-gray-800">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-800">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div> */}
          </div>
        </section>

        {/** ScreenS */}
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto">
                <img
                  alt="..."
                  className="max-w-full shadow-lg"
                  src={hero}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12 mt-10 sm:mt-0">
                  {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">
                    Cuidado en el Detalle
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Interés en la jerarquía visual y el color
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Responsiva
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Intuitiva</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Funcional</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sm:pt-16 sm:pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-14 sm:mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  4 Funcionalidades Principales
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Con el ojo en el buen funcionamiento del backend, y claridad y anticipación en el control de errores.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={users}
                    className="shadow-lg max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Usuarios
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Perfil / Pedidos
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={productos}
                    className="shadow-lg max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Productos
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Proceso de compra
                    </p>
                    <div className="mt-6">

                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={administrador}
                    className="shadow-lg max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Pedidos
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gestión Administrador
                    </p>
                    <div className="mt-6">

                      <button
                        className="bg-pink-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={contacto}
                    className="shadow-lg max-w-full mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Contacto
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gestión Mensajes
                    </p>
                    <div className="mt-6">

                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-10">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Otras Funcionalidades
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Interés y aprendizaje por React y Django
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-2 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Login
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Django Simple JWT Auth
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Registro
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Peticiones HTTP / Redirección
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Cesta
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Variables en Local Storage
                </p>
              </div>


            </div>
          </div>

          <div className='mx-auto flex flex-col md:flex-row justify-center px-10 gap-4'>
            <div className="px-4">
              <img src={imagen2} className="text-xl h-72 mt-5 font-semibold text-white">
              </img>
            </div>
            <div className="px-4">
              <img src={imagen3} className="mx-auto text-xl mt-5 h-72 font-semibold text-white">
              </img>
            </div>
            <div className="px-4">
              <img src={imagen4} className="text-xl mt-5 h-72 font-semibold text-white">
              </img>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Jeizy;