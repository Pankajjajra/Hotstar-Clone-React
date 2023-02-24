import React from 'react'
import TopImg from "../../assets/images/cta-logo-one.svg"
import BottomImg from "../../assets/images/cta-logo-two.png"

const Login = () => {
    return (
        <>
            <div className='min-h-screen w-full flex justify-center items-center bg-login-bg bg-no-repeat bg-cover bg-top' >
                <div className='flex h-full flex-col w-[700px] px-[30px] text-center'>
                    <img className='px-6 w-full mb-4' src={TopImg} alt="" />
                    <button className='text-xl mb-3 py-4 rounded font-bold uppercase bg-login-btn'>Get All There</button>
                    <p className='tracking-wider text-sm mb-5'>Get premier access to Raya and The Last Dragon for an additional fee with a Disney+ subscription.As of 06/14/22, the price of Disney+ and Disney Bundle will increase by $1.</p>
                    <img className='px-6 ' src={BottomImg} alt="" />
                </div>
            </div >
        </>
    )
}

export default Login