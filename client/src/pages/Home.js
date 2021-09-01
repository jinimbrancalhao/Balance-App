import React from 'react'

const Home = () => {
  const handleChange = () => {}

  const handleSubmit = () => {}

  return (
    <div>
      <div>Make Goal</div>
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} />
        <input name="start" onChange={handleChange} />
        <input name="end" onChange={handleChange} />
        <input name="description" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>Make Reflection</div>
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} />
        <input name="date" onChange={handleChange} />
        <input name="description" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home
