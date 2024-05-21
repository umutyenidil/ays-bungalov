import './index.css'
import HomePage from "./views/pages/Home.Page.jsx";
import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";                  //core css
import 'primereact/resources/primereact.css';

const App = () => {
    return (
        <PrimeReactProvider>
            <HomePage/>
        </PrimeReactProvider>
    );
};

export default App;