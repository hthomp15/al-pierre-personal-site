import '@/styles/tailwind.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {

  function usePrevious(value: any) {
    let ref = useRef()
  
    useEffect(() => {
      ref.current = value
    }, [value])
  
    return ref.current
  }

  let previousPathname = usePrevious(router.pathname)
  return (
    <div>
      <Header />
      <main>
        <Component previousPathname={previousPathname} {...pageProps} />  
      </main>
      <Footer />
    </div>
  )
}
