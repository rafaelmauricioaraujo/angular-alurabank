import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

//Usando Jquery
$('.form').submit(controller.adiciona.bind(controller));
