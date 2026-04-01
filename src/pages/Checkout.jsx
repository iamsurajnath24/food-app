import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout({ cart, setCart }) {
  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.qty * item.price, 0
  )

  // 🚀 Fake OTP send
  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number")
      return
    }

    // fake condition
    if (mobile === "7099971920") {
      alert("OTP sent successfully (Use 123456)")
      setStep(2)
    } else {
      alert("Use test number: 7099971920")
    }
  }

  // 🚀 Fake OTP verify
  const verifyOtp = () => {
    if (otp === "123456") {
      setCart({})
      setStep(3)
    } else {
      alert("Invalid OTP (Try 123456)")
    }
  }

  return (
    <div className='w-full min-h-screen bg-amber-100 flex justify-center items-center'>

      <div className='bg-amber-50 p-6 rounded-2xl shadow-xl w-[350px]'>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className='text-xl font-bold mb-4 text-center'>Checkout</h2>

            <p className='text-center mb-3'>Total: ₹ {total}</p>

            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className='w-full p-2 border rounded mb-4'
            />

            <button
              onClick={sendOtp}
              className='w-full bg-emerald-500 text-white py-2 rounded-xl'
            >
              Send OTP
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className='text-xl font-bold mb-4 text-center'>Verify OTP</h2>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className='w-full p-2 border rounded mb-4 text-center text-xl tracking-widest'
            />

            <button
              onClick={verifyOtp}
              className='w-full bg-green-500 text-white py-2 rounded-xl'
            >
              Verify & Order
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-green-600 mb-3'>
              Order Placed 🎉
            </h2>

            <button
              onClick={() => navigate('/')}
              className='bg-emerald-500 text-white px-5 py-2 rounded-xl'
            >
              Back to Home
            </button>
          </div>
        )}

      </div>
    </div>
  )
}