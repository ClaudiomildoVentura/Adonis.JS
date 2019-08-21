'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Album = use('App/Models/Album')
const Song = use('App/Models/Song')

Route.get('/', () => {
  return { greeting: 'Serve On!' }
})
Route.get('/albums', async () => {                 //Consultar todos
  const albums = await Album.query()
    .orderBy("id", "desc")
    .fetch()
  return albums
})

Route.get("/albums/:id", async ({ params }) => {  //Consultar pelo ID
  const album = await Album.query()
    .with("songs")
    .where("id", params.id)
    .first()
  return album
})

Route.post('/albums', async ({ request }) => {   // Inserir novo
  const { artist, album } = request.all()
  const newAlbum = new Album()
  newAlbum.name = album
  newAlbum.artist = artist
  await newAlbum.save()
  return newAlbum
})

Route.delete('/albums/:id', async ({ params }) => {                    //Deletar pelo ID
  const album = await Album.find(params.id)
  return album.delete()
})

Route.post('/albums/:id/song/add', async ({ request, params }) => {    //Inserir novo som
  const song = new Song()
  song.album_id = params.id
  song.name = request.input("song")
  await song.save()
  return song
})

Route.delete('/songs/:id', async ({ params }) => {      //Deletar
  const song = await Song.find(params.id)
  await song.delete()
})

/* Route.put("/albums/:id/photo", async ({ request, params }) => {
  const image = request.file("album_image", {
    types: ["image"],
    size: "2mb"
  })
  await image.move("public/uploads", {
    name: `${new Date().getTime()}.jpg`
  })
  const pathImage = `http://localhost:3333/uploads/${image.fileName}`
  const album = await Album.find(params.id)
  album.imagem = pathImage
  await album.save()
  return album
}) */