import './App.css'
import Keyboard from './components/keyboard/Keyboard'
import Question from './components/question/Question'
import Logo from './assets/imgs/RodaRodaLogo.png'

function App() {

  return (
    <div className='background'>
      <div className='container'>
        <div className='col-1'>
            <div className='screen'>
              Teste
            </div>

            <div>
              <Question question='Teste' />
              <Keyboard />
            </div>
        </div>
        <div className='col-2'>
          <div className='Logo'>
            <img className='logo-img' src={Logo} alt='Roda a Roda Logo' />

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
