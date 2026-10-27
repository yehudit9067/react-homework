import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

const products = [
  {
    id: 1,
    name: "כוסות",
    price: 25,
    description: "סט 6 כוסות זכוכית",
    longDescription: "סט שישה כוסות זכוכית עמידות, כל כוס בנפח 250 מ״ל, עיצוב מודרני ואלגנטי, מתאים לשימוש יומיומי ולאירוח. הכוסות עשויות מזכוכית איכותית ועמידות בפני חום וקור.",
    features: ["שישה בסט", "מתאימות למדיח", "זכוכית עמידה"]
  },
  {
    id: 2,
    name: "צלחות",
    price: 40,
    description: "סט 6 צלחות זכוכית",
    longDescription: "סט שישה צלחות זכוכית עמידות, כל צלחת בקוטר 25 ס״מ, עיצוב מודרני ואלגנטי, מתאים לשימוש יומיומי ולאירוח. הצלחות עשויות מזכוכית איכותית ועמידות בפני חום וקור.",
    features: ["שישה בסט", "מתאימות למדיח", "זכוכית עמידה"]
  },
  {
    id: 3,
    name: "מפה",
    price: 70,
    description: "מפת שולחן חגיגית גדולה",
    longDescription: "מפת שולחן העשויה מבד איכותי ודוחה כתמים, המפה באורך 2.8 מטר וברוחב 1.6 מטר מתאימה לשימוש יומיומי ולאירוח ועשויה מבד איכותי ואלגנטי",
    features: ["גודל: 1.6 * 2.8", "דוחה כתמים", "אלגנטית"]
  }

]


function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark((v) => !v)

  // רקע וצבע הדף עצמו (html/body) אינם צאצאים של .app,
  // לכן מרעננים את המחלקה גם על <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1>חנות המוצרים</h1>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={isDark}
          aria-label={isDark ? 'עבור למצב בהיר' : 'עבור למצב כהה'}
        >
          <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
          <span className="theme-toggle-label">
            {isDark ? 'מצב בהיר' : 'מצב כהה'}
          </span>
        </button>
      </header>

      <main>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      <section className="contact-section">
        <ContactForm />
      </section>
    </div>
  )
}

export default App
