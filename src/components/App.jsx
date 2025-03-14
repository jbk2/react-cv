import { useState } from 'react'
import '../assets/stylesheets/App.css'
import Header from './Header.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import EducationalInfo from './EducationalInfo.jsx'
import WorkInfo from './WorkInfo.jsx'
import CV from './CV.jsx'
import '../assets/stylesheets/form.css'

function App() {
  const [selectedView, setSelectedView] = useState('Edit CV');
  return (
    <>
      <Header selectedView={selectedView} setSelectedView={setSelectedView} />
      <main>
      {selectedView === "Edit CV" ? (
        <>
          <GeneralInfo />
          <EducationalInfo />
          <WorkInfo />
        </>
        ) : (
          <CV />
        )
      }
      </main>
    </>
  )
}

export default App
