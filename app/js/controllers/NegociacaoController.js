System.register(["../models/index", "../views/index", "../helpers/decorators/logarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, logarTempoDeExecucao_1, NegociacaoController, diasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (logarTempoDeExecucao_1_1) {
                logarTempoDeExecucao_1 = logarTempoDeExecucao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociacoes em dias úteis');
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
                _ehDiaUtil(data) {
                    return data.getDay() != diasDaSemana.Sabado && data.getDay() != diasDaSemana.Domingo;
                }
            };
            __decorate([
                logarTempoDeExecucao_1.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (diasDaSemana) {
                diasDaSemana[diasDaSemana["Domingo"] = 0] = "Domingo";
                diasDaSemana[diasDaSemana["Segunda"] = 1] = "Segunda";
                diasDaSemana[diasDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                diasDaSemana[diasDaSemana["Quarta"] = 3] = "Quarta";
                diasDaSemana[diasDaSemana["Quinta"] = 4] = "Quinta";
                diasDaSemana[diasDaSemana["Sexta"] = 5] = "Sexta";
                diasDaSemana[diasDaSemana["Sabado"] = 6] = "Sabado";
            })(diasDaSemana || (diasDaSemana = {}));
        }
    };
});
