import Navbar from '../components/Navbar';
import '../styles/globals.css';

function App({Component, pageProps}) {
    return (
    <>
        <Navbar />
        <Component {...pageProps}/>
        <style jsx global>{`
                nav {
                    background-color: dimgray;
                }
                a {
                    text-decoration: none;
                    color: black;
                }
                .active {
                    color: yellow;
                }

            `}</style>
    </>
);
}

export default App;