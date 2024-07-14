import './App.css'
import AppHeader from './components/header'
import Appslider from './components/slider'
import Appsabout from './components/about'
import AppContact from './components/contact-us'
import AppFooter from './components/footer'
import Appservices from './components/services'
import Apptestimonial from './components/testimonial'
import Appinsuranceplan from './components/insuranceplan'
import Appfaqs from './components/faqs'
import Appwhychooseus from './components/why-choose-us'


function App() {
  return(
    <main>

      <header>
        <AppHeader/>
      </header>
      <section>
        <Appslider/>
      </section>
      
      <section>
        <Appsabout/>
      </section>

      <section>
        <Appservices/>
      </section>

      <section>
        <Appinsuranceplan/>
      </section>

      <section>
        <Appwhychooseus/>
      </section>

      <section>
        <Apptestimonial/>
      </section>

      <section>
        <AppContact/>
      </section>

      <section>
        <Appfaqs/>
      </section>

      <section>
        <AppFooter/>
      </section>


    </main>
  )
}

export default App
