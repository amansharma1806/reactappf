import { useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:8080/api/users'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const data = await response.json()
      console.log('User saved:', data)
      
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    } catch (err) {
      setError('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="center">
        <h1>User Information Form</h1>
        {submitted && <p style={{ color: 'green', fontSize: '16px' }}>✅ Form Submitted Successfully!</p>}
        {error && <p style={{ color: 'red', fontSize: '16px' }}>❌ {error}</p>}
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={4}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </>
  )
}

export default App
