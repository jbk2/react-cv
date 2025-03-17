import { useState } from 'react'
import { useReducer } from 'react'
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
  
  const initialID = crypto.randomUUID();
  const [eduInfo, dispatchEduInfo] = useReducer((state, action) => {
    switch(action.type) {
      case "UPDATE":
        return {...state,
          [action.id]: {
            ...state[action.id],
            [action.fieldName]: action.payload
          }
        }
      case "DELETE": {
        const newState = {...state};
        delete newState[action.id];
        return newState;
      }
      case "ADD": {
        const newID = crypto.randomUUID()
        return {...state,
          [newID]: {qualificationTitle: '', awardYear: ''}
        };
      }
        
    }
  }, {
    [initialID]: { qualificationTitle:'', awardYear:'' }
  })

  const [employmentInfo, setEmploymentInfo] = useState(() => {
    const initialID = crypto.randomUUID()
    return {
      [initialID]: { employerName:'', jobTitle:'', startDate:'', endDate:'', roleDescription:'' }
    };
  });

  return (
    <>
      <Header selectedView={selectedView} setSelectedView={setSelectedView} />
      <main>
        {selectedView === "Edit CV" ? (
          <>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            <EducationalInfo eduInfo={eduInfo} dispatchEduInfo={dispatchEduInfo} />
            <EmploymentInfo employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo} />
          </>
        ) : (
          <CV generalInfo={generalInfo} eduInfo={eduInfo} employmentInfo={employmentInfo} />
        )}
      </main>
    </>
  )
}

export default App
