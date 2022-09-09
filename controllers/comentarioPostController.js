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
};