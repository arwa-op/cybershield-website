import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      setError('')

      const response = await fetch(
        'https://cybershield-backend-74sj.onrender.com/auth/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(formData),
        },
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Save Token

      localStorage.setItem('userInfo', JSON.stringify(data))

      // Redirect

      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-10">
        <h1 className="text-4xl font-bold text-white">Login</h1>

        <p className="mt-3 text-slate-400">Access your CyberShield account.</p>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login
