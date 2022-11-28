const db = require("../database/connection");
const express = require('express');
const router = express.Router();

// importação dos controlers utilizados nas rotas
const ComentariosPostController = require('../controllers/comentariosPostController');
const CurtidaPostController = require('../controllers/curtidaPostController');
const GenerosController = require('../controllers/generosController');
const MensagensController = require('../controllers/mensagensController');
const PostsController = require('../controllers/postsController');
const RelacionamentosController = require('../controllers/relacionamentosController');
const ReviewsController = require('../controllers/reviewsController');
const TitulosUsuariosController = require('../controllers/titulosUsuariosController');
const UsuariosController = require('../controllers/usuariosController');

// definição das rotas
router.get('/comentariospost', ComentariosPostController.listarComentariosPost);
router.post('/comentariospost', ComentariosPostController.create);
router.patch('/comentariospost/:id_comentario', ComentariosPostController.update);
router.delete('/comentarisopost/:id_comentario', ComentariosPostController.delete);

router.get('/curtidapost', CurtidaPostController.listarCurtidaPost);
router.post('/curtidapost', CurtidaPostController.create);
router.delete('/curtidapost/:id_usuario', CurtidaPostController.delete);
// excluir

router.get('/generos', GenerosController.listarGeneros);
// cadastrar
// editar
// excluir

router.get('/mensagens', MensagensController.listarMensagens);
// cadastrar
// editar
// excluir

router.get('/posts', PostsController.listarPosts);
// cadastrar
// editar
// excluir

router.get('/relacionamentos', RelacionamentosController.listarRelacionamentos);
// cadastrar
// editar
// excluir

router.get('/reviews', ReviewsController.listarReviews);
// cadastrar
// editar
// excluir

router.get('/titulosusuarios', TitulosUsuariosController.listarTitulosUsuarios);
// cadastrar
// editar
// excluir

router.get('/usuarios', UsuariosController.listarUsuarios);
// cadastrar
// editar
// excluir

module.exports = router;