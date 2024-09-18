import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
// eslint-disable-next-line camelcase
import {Inter, Space_Grotesk} from 'next/font/google'
import React from 'react'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotest = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotest'
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'Platform for asking questions',
  icons: {
    icon: '/assets/icons/calendar.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        <h1 className='h1-bold'>This is a text</h1>
        <body className={`${inter.variable} ${spaceGrotest.variable}`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}