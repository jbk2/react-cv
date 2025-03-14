import { useState } from 'react';
import '../assets/stylesheets/Header.css'

export default function Header({selectedView, setSelectedView}) {
  const handleClick = (view) => {
    setSelectedView(view);
  } 

  return (
    <header className="">
      <h2>Curriculum Vitae</h2>
      <div id="view-toggle">
        <p
          className={selectedView === 'Edit CV' ? 'selected' : ''}
          onClick={() => handleClick('Edit CV')}
        >
          Edit CV
        </p>
        <p
          className={selectedView === 'View CV' ? 'selected' : ''}
          onClick={() => handleClick('View CV')}
        >
          View CV
        </p>
      </div>
    </header>
  )
}