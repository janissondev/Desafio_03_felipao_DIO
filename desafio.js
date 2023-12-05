class hero {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack () {
        let attackUser;
        switch(this.type) {
            case "mago":
            case "Mago":
            case "MAGO":
                attackUser = "magia";
                break;
            case "guerreiro":
            case "Guerreiro":
            case "GUERREIRO":
                attackUser = "espada";
                break;
            case "monge":
            case "Monge":
            case "MONGE":
                attackUser = "arter marciais";
                break;
            case "ninja":
            case "Ninja":
            case "NINJA": 
                attackUser = "shuriken"
                break;
            default:
                console.log("Tipo de herói desconhecido")
        }
        console.log(`O ${this.type} atacou usando ${attackUser}`)
    }
}

let type = prompt("Digite o tipo do herói: (ex: mago, guereiro, monge, ninja")
switch(type) {
    case "mago":
    case "Mago":
    case "MAGO":
        let heroMege = new hero ("Feiticeira Escarlate", 26, type);
        heroMege.attack();
        break;
    case "guerreiro":
    case "Guerreiro":
    case "GUERREIRO": 
        let heroWarrior = new hero ("Gunther", 21, type);
        heroWarrior.attack();
        break;
    case "monge":
    case "Monge":
    case "MONGE":
        let heroMonk = new hero ("Wiki", 29, type);
        heroMonk.attack();
        break;
    case "ninja":
    case "Ninja":
    case "NINJA":
        let heroNinja = new hero ("Crust", 32, type);
        heroNinja.attack();
        break;
}  
