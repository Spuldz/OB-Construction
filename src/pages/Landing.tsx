import { Header } from "../components/Header"
import { InfoCard } from "../components/InfoCard"
import { TitleModal } from "../components/TitleModal"
import styles from '../css/landing.module.css'

import arrowRightSmall from '../assets/arrowRightSmall.svg'
import { Question } from "../components/Question"
import { FormFooter } from "../components/FormFooter"

import client from '../assets/client.png'
import example from '../assets/example.png'

export const Landing = () => {

    return(
        <div>
            <Header/>

            <div className={styles.section_top}>
                <TitleModal
                 title={"Tavs sapņu pagalms vien dažu soļu attālumā"}
                 body='Ja jūs sapņojat par kādu konkrētu pagalma dizainu, vidi vai ainavu, mēs esam gatavi jūsu vīziju pārvērst par realitāti'
                 variant={{
                    interactive: true,
                    buttonText: "Saņemt bezmaksas konsutlāciju!"
                 }}/>
            </div>  
            <div className={styles.section2}>
                 <div className={styles.section2Top}>
                    <span>Nepieciešams labiekārtotu teritoriju<br/> vai piemājas pagalmu -  uzticiet šo<br/> pienākumu profesionāļiem</span>
                 </div>
                 <div className={styles.section2Bottom}>
                    <span>
                    Mēs saprotam, cik teritorijas labiekārtošana un uzturēšana ir laikietilpīga,
                     tāpēc mēs vēlamies<br/> jums palīdzēt. Mēs esam profesionāļi savā nozārē,
                      tāpēc pakalpojumus sniegsim efektīvi un<br/> kvalitatīvi, atbrīvojot jūsu laiku.
                    </span>
                 </div>
            </div>
            <div className={styles.section3}>
                 <div className={styles.section3Top}>
                    <span>klientu atsauksmes</span>
                 </div>
                 <div className={styles.section3Bottom}>
                  <InfoCard info={{
                     name: "Karlis",
                     examplePhoto: example,
                     clientPhoto: client
                  }}/>
                 </div>
            </div>
            <div className={styles.section4}>
                 <div className={styles.section4Top}>
                  <span>Mūsu pakalpojumi</span>
                 </div>
                 <div className={styles.section4Bottom}>
                     <div className={styles.section4Left}>
                        <p>Bruģa ieklāšana</p>
                        <span>
                        Mēs piedāvājam dažādu veidu bruģēšanas
                         pakalpojumus, sākot no pamatu izveides
                          līdz galīgajai bruģēšanas kārtošanai.
                        </span>
                        <br/>
                        <div>
                           Uzzināt vairāk
                           <img src={arrowRightSmall}/>
                        </div>
                     </div>
                     <div className={styles.section4Right}>
                        <p>Pagalmu labiekārtošana</p>
                        <span>
                        Mēs piedāvājam dažādu veidu bruģēšanas<br/> pakalpojumus,
                         sākot no pamatu izveides līdz<br/> galīgajai bruģēšanas kārtošanai.
                        </span>
                        <br/>
                        <div>
                           Uzzināt vairāk
                           <img src={arrowRightSmall}/>
                        </div>
                     </div>
                     <div className={styles.section4Left}>
                        <p>Koka mēbelesa</p>
                        <span>
                        Mēs piedāvājam dažādu veidu bruģēšanas pakalpojumus,
                         sākot no pamatu izveides līdz galīgajai bruģēšanas kārtošanai.
                        </span>
                        <br/>
                        <div>
                           Uzzināt vairāk
                           <img src={arrowRightSmall}/>
                        </div>
                     </div>
                     <div className={styles.section4Right}>
                        <p>Pagalmu labiekārtošana</p>
                        <span>
                        Mēs piedāvājam dažādu veidu bruģēšanas<br/> pakalpojumus,
                         sākot no pamatu izveides līdz<br/> galīgajai bruģēšanas kārtošanai.
                        </span>
                        <br/>
                        <div>
                           Uzzināt vairāk
                           <img src={arrowRightSmall}/>
                        </div>
                     </div>
                 </div>
            </div>
            <div className={styles.section5}>
                 <div className={styles.section5Top}>
                  <span>
                  Pirms Jūs ar mums sazinaties šeit ir daži jautājumi, kuri Jums varēja rasties:
                  </span>
                 </div>
                 <div className={styles.section5Bottom}>
                  <Question q="Pirmais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Otrais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Trešais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Ceturtais jautājums?" a="Atbilde uz jautājumu..."/>
                  <Question q="Piektais jautājums?" a="Atbilde uz jautājumu..."/>
                 </div>
            </div>
            <FormFooter/>
        </div>
    )
}