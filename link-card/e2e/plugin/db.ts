import pg from 'pg'
const { Client } = pg

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "link_card",
  user: "user",
  password: "password",
})

client.connect()

export {
  client
}