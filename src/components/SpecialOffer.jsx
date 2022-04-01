
import bg from "../images/specailoffer.jpg"
import { useNavigate } from "react-router"

export default function SpecialOffer() {
  const navigate = useNavigate()
  return (
    <div className="relative h-[50vh] bg-black bg-opacity-60 flex justify-center">
        <img src={bg} alt="" className="absolute top-0 w-screen h-[50vh] -z-10 object-cover opacity-60" />
        <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-white text-2xl font-semibold">SPECIAL OFFER</h1>
            <p className="font-semibold text-white text-lg tracking-widest text-center">Special offers discounts for <br /> women this week only</p>
            <button onClick={() => navigate("/product")} className="bg-orange-500 p-2 font-semibold text-white text-lg rounded-xl">SHOP NOW</button>
        </div>
    </div>
  )
}
