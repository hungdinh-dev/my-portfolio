import React from 'react'
import { useTranslation } from 'react-i18next';

const Button = ({ name, isBeam = false, containerClass }) => {

  const { t, i18n } = useTranslation();


  return (
    <div className={`btn ${containerClass}`}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping' />
          <span className='btn-ping_dot' />
        </span>
      )}
      {t(name)}
    </div>
  )
}

export default Button