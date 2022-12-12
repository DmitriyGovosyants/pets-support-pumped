import { toast } from "react-toastify";

export const requestErrorPopUp = error => {
  if (error?.status === 400) {
    toast.error(error?.data?.message);
  }
  if (error?.status === 401) {
    toast.error(error?.data?.message);
  }
  if (error?.status === 404) {
    toast.error('Resourses not found');
  }
  if (error?.status === 498) {
    window.location.reload();
  }
  if (error?.status === 500) {
    toast.error('Server not response');
  }
}