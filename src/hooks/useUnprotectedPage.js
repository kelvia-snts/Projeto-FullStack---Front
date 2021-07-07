import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../routes/Coordinator";

export const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToHome(history);
    }
  }, [history]);
};
