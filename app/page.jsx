import Image from 'next/image'
import Header from './components/Header/Header'
import PromoSlider from './components/PromoSlider/PromoSlider'

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <PromoSlider/>
    </main>
  )
}
