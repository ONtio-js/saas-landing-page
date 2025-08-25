import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen md:px-20 px-5 py-10 bg-blue-500/10'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App