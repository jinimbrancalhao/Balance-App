import axios from 'axios'
import React from 'react'
import reflection from '../../../models/reflection'
import ReflectionCard from '../components/ReflectionCard'

const Reflections = () => {
  const [reflections, setReflections] = useState([])

  const getReflections = async () => {
    const res = await axios.get('http://localhost:3001/api/reflections')
    setReflections(res)
  }

  useEffect(() => {
    getReflections
  }, [])

  return (
    <div>
      <h1>Reflections</h1>
      {reflections.map((reflection) => (
        <ReflectionCard
          title={reflection.title}
          date={reflection.date}
          description={reflection.description}
        />
      ))}
    </div>
  )
}

export default Reflections
