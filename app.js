const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json())

let db

const startServer = async () => {
  try {
    db = await open({
      filename: path.join(__dirname, 'details.db'),
      driver: sqlite3.Database,
    })
    console.log('Database connected successfully.')
  } catch (e) {
    console.log('Failed to connect to the database:', e.message)
    process.exit(1)
  }
}

startServer()

app.get('/all-items', async (req, res) => {
  try {
    const data = await db.all('SELECT * FROM stored_data')
    console.log('started')
    res.status(200).json(data)
  } catch (e) {
    console.error('Error fetching data:', e.message)
    res.status(500).send('Internal Server Error')
  }
})

app.post('/upload-data', async (req, res) => {
  const {title, description, thumbnailUrl, videoUrl} = req.body
  try {
    console.log(title)
    await db.run(
      `INSERT INTO stored_data (title, description, img_url, video_url) VALUES ("${title}", "${description}", "${thumbnailUrl}", "${videoUrl}");`,
    )
    res.status(200).send('Success')
  } catch (e) {
    console.error('Error inserting data:', e.message)
    res.status(500).send('Internal Server Error')
  }
})

app.get('/get-uploded-by-id/:id', async (req, res) => {
  try {
    const data = await db.get(
      `SELECT * FROM stored_data WHERE id = ${req.params.id}`,
    )
    console.log('started')
    res.status(200).json(data)
  } catch (e) {
    console.error('Error fetching data:', e.message)
    res.status(500).send('Internal Server Error')
  }
})

app.delete('/del/:id', async (req, res) => {
  try {
    const {id} = req.params

    const sql = `DELETE FROM stored_data WHERE id=${id};` // Correct SQL syntax
    await db.run(sql)
    const data = await db.all('SELECT * FROM stored_data')
    console.log('started')
    res.status(200).json(data)
  } catch (e) {
    console.error('Error deleting data:', e.message)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(3000)

module.exports = app
