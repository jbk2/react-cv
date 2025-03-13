import '../assets/stylesheets/App.css'
import Header from './Header.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import EducationalInfo from './EducationalInfo.jsx'
import WorkInfo from './WorkInfo.jsx'
import '../assets/stylesheets/form.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <GeneralInfo />
        <EducationalInfo />
        <WorkInfo />
      </main>
    </>
  )
}

export default App
