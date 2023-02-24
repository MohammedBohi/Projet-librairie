// un livre
export default class Livre {
    constructor( id,titre, prix,qtestock) {
       this._id=id;
        this._titre = titre;
        this._prix = prix;
        this._qtestock=qtestock;}
    get titre() {
        return this._titre;
    }
    get id() {
        return this._id;
    }
    get prix() {
        return this._prix;
    }

    // modifier fait / pas fait
    get qtestock() {
        return this._qtestock;
    }
    // modifier le texte
    set prix(nouveauprix) {
        this._prix = nouveauprix;
    }
   set qtestock(qtestock){
        this._qtestock=qtestock;
   }
   pourDiminuer(){
        this._qtestock-=1;
   }
   pourAugmenter(){
        this._qtestock+=1;
   }
    pourAfficher() {
        return this._titre ;
    }
}
