import axios from "axios";
import React, {useEffect,useState} from "react";


const Home = () => {
const [productos, setProductos] = React.useState([]);
  useEffect(() => {
      const fetchProductos = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/categorias/');
              setProductos(response.data);
          } catch (error) {
              console.error('Error al obtener los productos:', error);
          }
      };
      fetchProductos();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">R & T Happy Shoes</h1>
        <p className="text-lg text-gray-600">Explora nuestras funcionalidades y más.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Comenzar
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {productos.map((producto) => (
                <a
                    key={producto._id}
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {producto.nombre}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {producto.descripcion}
                    </p>
                    <small className="text-gray-500 dark:text-gray-400">
                        Fecha de creación: {new Date(producto.fechaCreacion).toLocaleDateString()}
                    </small>
                </a>
            ))}
        </div>
    </div>
  );
};

export default Home;
