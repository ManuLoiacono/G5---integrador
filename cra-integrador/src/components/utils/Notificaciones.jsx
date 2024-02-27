import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastError = (texto) => {
  return toast.error(texto, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const toastSuccess = (texto) => {
  return toast.success(texto, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
