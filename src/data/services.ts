import call from '../assets/call.svg'
import lightbulb from '../assets/lightbulb.svg'
import delivery from '../assets/delivery.svg'
import badge from '../assets/badge.svg'

type Data = {
    image: string,
    title: string,
    text: string,
    long: boolean
}

export const services:Data[] = [
    {
        image: call,
        title: "Sazināsimies un sniegsim jums kosultāciju",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long: true
    },
    {
        image: lightbulb,
        title: "Pagalma projektēšana un plānošana",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long: true
    },
    {
        image: delivery,
        title: "Materiālu iepirkšana un piegāde",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long: true
    },
    {
        image: badge,
        title: "Darbu veikšana un kvalitātes kontrole",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long: true
    }
]