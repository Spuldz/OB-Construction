import { Header } from "../components/Header"
import { TitleModal } from "../components/TitleModal"
import { Option } from "../components/inserting/Option"
import styles from '../css/inserting.module.css'

import school from '../assets/school.svg'
import store from '../assets/store.svg'
import building from '../assets/building.svg'


import {constructionTypes} from '../data/constructionTypes'
import { services } from "../data/services"
import { TitleParagraph } from "../components/inserting/TitleParagraph"
import differences from '../data/differences.json'
import { InfoCard } from "../components/InfoCard"

import client from '../assets/client.png'
import example from '../assets/example.png'
import { Question } from "../components/Question"
import { Footer } from "../components/Footer"


type Data = {
    image: string,
    title: string,
    text: string,
    long: boolean
}


export const Inserting = () => {

    return(
        <>
            <Header/>
            <div className={styles.section1}>
                <TitleModal title="BRUĢA IELIKŠANA" body="Mēs sniedzam kvaletatīvus un augstākās klases bruģēšanas pakalpojumus, lai jūsu
                īpašums izskatītos skaists un kopts, neatkarīgi no tā, vai tas ir privātais mājoklis vai komerciāls objekts."
                variant={{
                    interactive: false,
                    buttonText: ""
                }}/>
            </div>
            <div className={styles.section2}>
                {constructionTypes.map((item:Data, i:number) => {
                    return(
                        <Option data={item} key={i}/>
                    )
                })}
            </div>
            <div className={styles.section3}>
                <div className={styles.section3Top}>
                    <span>Kā mēs strādājam</span>
                </div>
                <div className={styles.section3Bottom}>
                    {services.map((item: Data, i:number) => {
                        return(
                            <Option data={item} key={i}/>
                        )
                    })}
                </div>
            </div>
            <div className={styles.section4}>
                <div className={styles.section4Top}>
                    <span>Kā mēs atšķiramies</span>
                </div>
                <div className={styles.section4Bottom}>
                    {differences.map((item:any, i:number) => {
                        return(
                            <TitleParagraph data={item} key={i}/>
                        )
                    })}
                </div>
            </div>
            <div className={styles.section5}>
                <span>Mēs esam apņēmības pilni, lai nodrošinātu jums visasugstāko kvalitāti un pārsteidzošu pieredzi</span>
            </div>
        </>
    )
}

/*
            <div className={styles.section6}>
                <div className={styles.section6Top}>
                    <span>Klientu Atsauksmes</span>
                </div>
                <div className={styles.section6Bottom}>
                    <InfoCard info={{
                        name: "Karlis",
                        examplePhoto: example,
                        clientPhoto: client
                    }}/>
                </div>
            </div>
            <div className={styles.section7}>
                <div className={styles.section7Top}>
                    <div>
                        <span>Pirms Jūs ar mums sazinaties šeit ir daži jautājumi, kuri Jums varēja rasties:</span>
                    </div>
                </div>
                <div className={styles.section7Bottom}>
                  <Question q="Pirmais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Otrais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Trešais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Ceturtais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Piektais jautājums?" a="Atbilde uz jautājumu..."/>
                </div>
            </div>
            <Footer/>
            */