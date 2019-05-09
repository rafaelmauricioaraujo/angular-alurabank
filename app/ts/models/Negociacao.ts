export class Negociacao {

    //constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

}