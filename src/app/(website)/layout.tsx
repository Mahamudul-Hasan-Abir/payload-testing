import FooterServer from '@/blocks/global/Footer/Server'
import HeaderServer from '@/blocks/global/Header/Server'
import React from 'react'
import '@/styles/globals.css'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderServer></HeaderServer>
      {children}
      <FooterServer></FooterServer>
    </div>
  )
}
