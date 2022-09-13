import fs from 'fs'
import path from 'path'

export default function(req, res) {
  const { image } = req.query
  const filePath = path.resolve('.', `public/${image}`)
  const imageBuffer = fs.readFileSync(filePath)
  res.setHeader('Content-Type', 'image/jpg')
  res.send(imageBuffer)
}