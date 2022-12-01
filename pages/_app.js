import '../styles/globals.css';
import '../src/components/WagmiClient';
import WagmiClient from '../src/components/WagmiClient';
// import { WagmiConfig, createClient } from 'wagmi';
// import { getDefaultProvider } from 'ethers';

// const client = createClient({
//     autoConnect: true,
//     provider: getDefaultProvider(),
// });

function MyApp({ Component, pageProps }) {
    return (
        // <WagmiConfig client={client}>
        //     <Component {...pageProps} />;
        // </WagmiConfig>
        <WagmiClient>
            <Component {...pageProps} />;
        </WagmiClient>
    );
}

export default MyApp;
