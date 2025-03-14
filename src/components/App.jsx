import { useState } from 'react'
import '../assets/stylesheets/App.css'
import Header from './Header.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import EducationalInfo from './EducationalInfo.jsx'
import EmploymentInfo from './EmploymentInfo.jsx'
import CV from './CV.jsx'
import '../assets/stylesheets/form.css'

function App() {
  const [selectedView, setSelectedView] = useState('Edit CV');
  const [generalInfo, setGeneralInfo] = useState({firstName:'', lastName:'', email:'', telephone:''})
  const [educationalInfo, setEducationalInfo] = useState(() => {
    const initialID = crypto.randomUUID();
    return {
      [initialID]: { qualificationTitle:'', awardYear:'' }
    };
  });

  const [employmentInfo, setEmploymentInfo] = useState({employerName:'', jobTitle:'', startDate:'', endDate:'', roleDescription:''})
  return (
    <>
      <Header selectedView={selectedView} setSelectedView={setSelectedView} />
      <main>
        {selectedView === "Edit CV" ? (
          <>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            <EducationalInfo educationalInfo={educationalInfo} setEducationalInfo={setEducationalInfo} />
            <EmploymentInfo employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo} />
          </>
        ) : (
          <CV generalInfo={generalInfo} educationalInfo={educationalInfo} employmentInfo={employmentInfo} />
        )}
      </main>
    </>
  )
}

export default App
