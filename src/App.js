import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Container from './components/Container'

function App() {
  const [emojisData, setEmojisData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)

      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')

        setEmojisData(res.data)
        setLoading(false)

      } catch (error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }
    fetchEmojis()
  }, [])

  console.log(emojisData)
  return (
    <>
      <Navbar />

      <Container>
        <h1>Hello, world!</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Ooopps...</p>}
        {emojisData.length > 0 && <p>Data berhasil di render</p>}
      </Container>

    </>
  );
}

export default App;
