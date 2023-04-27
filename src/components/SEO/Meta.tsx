import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { IMeta } from './meta.interface'

const getTitle = (title: string) => `${title}`

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return <>
        <Head>
            <title>{title}</title>
            {description ? (
                <>
                    <meta typeof='description' content={description} />
                    <meta name='og:title' content={getTitle(title)} />
                    <meta name='og:description' content={description} />
                    <link rel="stylesheet" href="./dist/kursor.css"></link>

                </>) : (
                <meta name='robots' content='noindex, nofollow' />
            )}
        </Head>
        {children}
    </>
}

export default Meta