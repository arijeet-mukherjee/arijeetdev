// Injects the server-rendered markup into dist/index.html so crawlers get real content without running JS.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')
const ssrDir = path.join(dist, '.ssr')
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const file = path.join(dist, 'index.html')
const html = fs.readFileSync(file, 'utf8').replace('<!--app-html-->', render())
fs.writeFileSync(file, html)
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')
