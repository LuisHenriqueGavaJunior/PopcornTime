//Luis 

const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarComentarioPost(request, response){
        try{
            const sql = 'Select id_comentario, id_post, id_usuario, comentario_post from comentariospost;';
            const comentariopost = await db.query(sql);

            return response.status(200).json({confirma: "Sucesso", nResults: comentariopost[0].length, message: comentariopost[0]}); 
        } catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
async create(request, response) {
    try {
        const {id_post, id_usuario, comentario_post} = request.body;
        const sql= 'INSERT INTO comentariospost (id_post, id_usuario, comentario_post) VALUES (?, ?, ?)';
        const values = [id_post, id_usuario, comentario_post];
        const confirmacao = await db.query(sql, values);
        const id_comentario = confirmacao[0].insertId;
        return response.status(200).json({confirma: 'Sucesso', message: id_comentario});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
    },
};