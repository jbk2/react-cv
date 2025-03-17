import { useState } from 'react'
import { useReducer } from 'react'
import '../assets/stylesheets/App.css'
import '../assets/stylesheets/form.css'
import Header from './Header.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import EducationalInfo from './EducationalInfo.jsx'
import educationReducer from './reducers/educationReducer.js'
import EmploymentInfo from './EmploymentInfo.jsx'
import employmentReducer from './reducers/employmentReducer.js'
import CV from './CV.jsx'

function App() {
  const [selectedView, setSelectedView] = useState('Edit CV');
  const [generalInfo, setGeneralInfo] = useState({firstName:'', lastName:'', email:'', telephone:''});
  const [eduInfo, dispatchEduInfo] = useReducer(educationReducer, {
    [crypto.randomUUID()]: {qualificationTitle: '', awardYear: ''}
  });
  const [employmentInfo, dispatchEmploymentInfo] = useReducer(employmentReducer, {
    [crypto.randomUUID()]: { employerName:'', jobTitle:'', startDate:'', endDate:'', roleDescription:'' }
  });
 
  return (
    <>
      <Header selectedView={selectedView} setSelectedView={setSelectedView} />
      <main>
        {selectedView === "Edit CV" ? (
          <>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            <EducationalInfo eduInfo={eduInfo} dispatchEduInfo={dispatchEduInfo} />
            <EmploymentInfo employmentInfo={employmentInfo} dispatchEmploymentInfo={dispatchEmploymentInfo} />
          </>
        ) : (
          <CV generalInfo={generalInfo} eduInfo={eduInfo} employmentInfo={employmentInfo} />
        )}
      </main>
    </>
  )
}

export default App
