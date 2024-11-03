import { Context } from "@app/providers/context/ContextProvider";
import { useContext } from "react";

const useContainer = () => {
  const context = useContext(Context)

  const handleCloseModal = () => {
    context.closeModal()
  }

  return {
    handleCloseModal
  };
};

export default useContainer;