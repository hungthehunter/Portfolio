import type { Metadata } from 'next';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})

export const metaData: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio of hungthehunter'
}

export default function RootLayout({ children }: {children: React.ReactNode}){
    return(
        <html lang="vi">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}