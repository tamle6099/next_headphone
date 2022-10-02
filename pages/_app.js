import Layuot from "../componentes/Layuot";
import "../styles/globals.css";
import { StateContext } from "../starecontext/StateContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layuot>
        <Toaster />
        <Component {...pageProps} />
      </Layuot>
    </StateContext>
  );
}

export default MyApp;
