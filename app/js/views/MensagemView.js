var Views;
(function (Views) {
    class MensagemView extends Views.View {
        template(model) {
            return `<p class="alert-info">${model}</p>`;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
