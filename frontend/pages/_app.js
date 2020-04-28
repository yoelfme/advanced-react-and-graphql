// import App, { Container } from 'next/app' 
import Page from '../components/Page'


const MyApp = ({ Component, pageProps }) => {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}

export default MyApp