'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Album extends Model {
    songs() {
        return this.hasMany("App/Models/Song") //Especificando que um album tem muitas Musicas apontando para o respectivo namespace do song
    }
    static get hidden() {
        return ["updated_at", "created_at"]     //Método responsável por esconder info relevantes
    }
}
module.exports = Album