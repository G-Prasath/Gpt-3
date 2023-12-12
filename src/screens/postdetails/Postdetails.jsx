import React from 'react'
import './postdetails.css'
import { useLocation } from 'react-router-dom'
import MediaControlCard from '../../components/card/Musiccard'


const Postdetails = () => {
  const location = useLocation()
  const {state} = location
  return (
    <>
      <MediaControlCard props={state}/>
    </>
  )
}

export default Postdetails