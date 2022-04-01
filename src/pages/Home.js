import Category from '../components/Category'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewArrival from '../components/NewArrival'
import Newsletter from '../components/Newsletter'
import Products from '../components/Product'
import Slide from '../components/Slide'
import SpecialOffer from '../components/SpecialOffer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Navbar />
        <Slide />
        <Category />
        <Featured />
        {/* <Products /> */}
        <SpecialOffer />
        <NewArrival />
        <Newsletter />
        <Footer />
    </div>
  )
}
