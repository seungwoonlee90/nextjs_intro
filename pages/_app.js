import Layout from '../components/layout';
import '../styles/globals.css';

function App({Component, pageProps}) {
    return (
    <Layout>
        <Component {...pageProps}/>
        <style jsx global>{`
                a {
                    text-decoration: none;
                    color: black;
                }
                .active {
                    color: yellow;
                }

            `}</style>
    </Layout>
);
}

export default App;