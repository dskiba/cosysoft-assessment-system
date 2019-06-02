import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const goToMainPage = () => {
  history.replace("/");
};
