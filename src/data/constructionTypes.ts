import school from '../assets/school.svg'
import store from '../assets/store.svg'
import building from '../assets/building.svg'

type Data = {
    image: string,
    title: string,
    text: string,
    long: boolean
}

export const constructionTypes = [
    {
        image: school,
        title: "Bruģēšana privātmāju teritorijās",
        text: "Takas, laukumi, atpūtas zonas, sporta laukumi, piebraucamie ceļi, stāvvietas utt.",
        long: false
    },
    {
        image: store,
        title: "Bruģēšana industriālos objektos",
        text: "Noliktavas, fabrikas, ražotnes u.c. teritorijas, kas paredzētas lielām slodzēm",
        long: false

    },
    {
        image: building,
        title: "Bruģēšana publiskajā ārtelpā",
        text: "Ielas, ietves, stāvlaukumi, parki, skvēri utt.",
        long: false

    },
]