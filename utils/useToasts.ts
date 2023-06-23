// React Toast library
import { toast } from "react-toastify";

interface MyToastType {
  feedback: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
}

export const SuceedToast = async (arg: MyToastType) => {
  toast.success(arg.feedback, {
    position: arg.position || "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const FailedToast = async (arg: MyToastType) => {
  toast.error(arg.feedback, {
    position: arg.position || "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const PromiseToast = async (arg: MyToastType) => {
  toast.error(arg.feedback, {
    position: arg.position || "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
