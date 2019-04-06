//export const nombre = "pablo"

//console.log("hello word")

export const pepita = {

    energia: 30,

    volar: function (km) {
        this.energia -= km * 3
    },

    comer: function (gramos) {
        this.energia += gramos * 2
    }
}

pepita.comer(3)
console.log(`La energia de pepita is :  ${ pepita.energia }  despues de comer`)

pepita.volar(2)
console.log(`La energia de pepita es : ${ pepita.energia } despues de volar`)