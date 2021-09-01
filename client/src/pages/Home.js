import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Make Goal</div>
      <form>
        <input name="title" />
        <input name="start" />
        <input name="end" />
        <input name="description" />
      </form>
      <div>Make Reflection</div>
      <form>
        <input name="title" />
        <input name="date" />
        <input name="description" />
      </form>
    </div>
  )
}

export default Home
