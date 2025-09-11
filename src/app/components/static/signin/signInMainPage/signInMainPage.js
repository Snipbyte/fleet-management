import React from 'react'
import SignInForm from '../signinForm/signInForm'
import Header from '@/app/components/common/header/header'
import Footer from '@/app/components/common/footer/footer'

export default function SignInMainPage() {
  return (
    <>
      <Header/>
      <SignInForm />
      <Footer/>
    </>
  )
}
