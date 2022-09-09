//Luis 

const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarCurtidaPost(request, response){
        try{
            const sql = 'Select id_post, id_usuario from curtidapost;';
            const curtidapost = await db.query(sql);

            return response.status(200).json({confirma: "Sucesso", nResults: curtidapost[0].length, message: curtidapost[0]}); 
        } catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
