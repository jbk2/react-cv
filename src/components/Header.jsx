import '../assets/stylesheets/Header.css'

export default function Header() {
  return (
    <header className="">
      <h2>Curriculum Vitae</h2>
      <div id="view-toggle">
        <p className="selected">Edit CV</p>
        <p>View CV</p>
      </div>
    </header>
  )
}