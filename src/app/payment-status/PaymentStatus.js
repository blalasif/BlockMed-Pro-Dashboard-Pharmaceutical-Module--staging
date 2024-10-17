"use client"

import { useState } from "react"
import PaymentStatusModal from "@/components/paymentStatusModal/PaymentStatusModal"

const PaymentStatus = () => {

    const [paymentStatus, setPaymentStatus] = useState(true)

    return (
        <div className="flex justify-center w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
            <PaymentStatusModal status={paymentStatus} />
        </div>
    )
}

export default PaymentStatus
