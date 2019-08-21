'use strict'
/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')  //descomentar essa váriavel

// Factory.blueprint('App/Models/User', (faker) => {
//   return {username: faker.username()}})
Factory.blueprint('App/Models/Album', (faker) => ({ name: faker.name(), artist: faker.name() }))
Factory.blueprint('App/Models/Song', (faker) => ({ name: faker.name(), album_id: faker.integer({ min: 1, max: 10 }) }))