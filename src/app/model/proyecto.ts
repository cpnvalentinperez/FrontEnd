export class Proyecto {

    id?: number;
    imgProjecto: String;
    nameProjecto: String;
    descriptionProjecto: String;
    linkProjecto: String;

    constructor(imgProjecto: String, nameProjecto: String, descriptionProjecto: String, linkProjecto: String) {

        this.imgProjecto = imgProjecto;
        this.nameProjecto = nameProjecto;
        this.descriptionProjecto = descriptionProjecto;
        this.linkProjecto = linkProjecto;

    }

}