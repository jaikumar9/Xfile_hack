import '../app/globals.css';
import { Web3Modal } from '../context/web3modal'
function MyApp({ Component, pageProps }) {
    return  <Web3Modal><Component {...pageProps} /></Web3Modal>  
}

export default MyApp;
