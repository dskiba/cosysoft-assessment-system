import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const goToMainPage = () => {
  history.replace("/");
};

export const goTo = (path = "/Users") => {
  history.replace(path);
};
