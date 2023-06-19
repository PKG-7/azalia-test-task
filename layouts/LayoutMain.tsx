import ErrorBoundary from '@/components/ui/Err/ErrorBoundary'
import ErrScreen from '@/components/ui/Err/ErrScreen'
import Head from 'next/head'
import { ReactNode } from 'react'
import styles from './LayoutMain.module.scss'

export default function LayoutMain({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Pavel K Test Task</title>
                <meta name='description' content='Test task by Pavel K' />
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <ErrorBoundary fallback={<ErrScreen />}>
                <div className={styles.main}>{children}</div>
            </ErrorBoundary>
        </>
    )
}
