import React from 'react'

const CoverBlockServer = ({ title, subtitle }) => {
  return (
    <div className="max-w-5xl py-20 text-center mx-auto">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  )
}

export default CoverBlockServer
