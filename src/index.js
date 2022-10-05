import React from "react";
import ReactDOM from "react-dom/client";
import Input from "./components/Input.jsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import View from "./components/View.jsx";
import styles from "./style/index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className={styles.indexWrapper}>
        <div className={styles.appWrapper}>
        <Input />
        <View />
        </div>
      </div>
    </Provider>
  </React.StrictMode>
);
