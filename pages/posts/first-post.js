import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// Link component enables client-side navigation,
//  which is faster than the browser's default

// Component can have any name
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    
    )
  }
  