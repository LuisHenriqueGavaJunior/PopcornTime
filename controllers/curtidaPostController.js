//Luis 

const { json, response } = require("express");
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
async create(request, response) {
    try {
        const {id_post, id_usuario} = request.body;
        const sql= 'INSERT INTO curtidapost (id_post, id_usuario) VALUES (?, ?)';
        const values = [id_post, id_usuario];
        const confirmacao = await db.query(sql, values);
        const teste = confirmacao[0].insertId;
        console.log(teste);
        return response.status(200).json({confirma: 'Sucesso', message: {id_post,  id_usuario}});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
    },
};