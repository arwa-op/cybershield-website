import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'

import Dashboard from './pages/Dashboard'

import About from './pages/About'

import Contact from './pages/Contact'

import Login from './pages/Login'

import Register from './pages/Register'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [threatData, setThreatData] = useState(null)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [showResults, setShowResults] = useState(false)

  // Scan Handler

  const handleScan = async (input) => {
    try {
      setLoading(true)

      setError('')

      setShowResults(true)

      const userInfo = JSON.parse(localStorage.getItem('userInfo'))

      // Not Logged In

      if (!userInfo) {
        setError('Please login first.')

        setLoading(false)

        return
      }

      const response = await fetch(
        'https://cybershield-backend-74sj.onrender.com/scan',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',

            Authorization: `Bearer ${userInfo.token}`,
          },

          body: JSON.stringify({
            input,
          }),
        },
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Scan failed')
      }

      setThreatData(data)
    } catch (error) {
      console.log(error)

      setError(error.message || 'Unable to analyze threat right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onScan={handleScan}
              loading={loading}
              threatData={threatData}
              error={error}
              showResults={showResults}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
