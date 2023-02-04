import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '../styles/globals.scss'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: 'normal',
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}
