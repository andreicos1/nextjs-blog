// Top level component that will be common across all different pages
// Can be used to, for example, keep state across pages

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}