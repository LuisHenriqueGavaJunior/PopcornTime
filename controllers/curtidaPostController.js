//Luis Henrique

const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarCurtidaPost(request, response){
        try{
            return response.status(200).json({confirma: "CurtidaPost"}); 
        } catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};