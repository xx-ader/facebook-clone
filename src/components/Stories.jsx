import React from 'react'
import { Story } from './Story'
import '../stories.css'
export const Stories = () => {
    return (
        <>
        <div className="stories">
            <Story 
            name='Mark Zukerberg' 
            src='https://up-magazine.info/wp-content/uploads/2019/04/Mark-Zuckerberg.jpg'  
            profilePicture='https://www.leparisien.fr/resizer/xaMdkcoE8E9zJoyxl64KqDwBFlc=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/QVZCPFZL2IQWTARYLLDYJ7GWA4.jpg' />

            <Story 
            name='Keny West' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytYBm88lnjm7FGdWRlQLdT0faQ-bmx3lHcg&usqp=CAU' 
            profilePicture='https://img-3.journaldesfemmes.fr/U2uIErFqLXKOTAQtRGpGEvUq14A=/1500x/smart/e59da2a1976944eeb383480794395273/ccmcms-jdf/28152212.jpg' />

            <Story 
            name='Michael Page' 
            src='https://mmaworldranking.com/wp-content/uploads/2021/05/Michael-Page.jpg' 
            profilePicture='https://mmacenter.fr/wp-content/uploads/2021/04/Michael-Page-revient-au-Bellator-258-contre-Derek-Anderson.png' />

            <Story 
            name='Jimmy Hendrix' 
            src='https://cdn.pixabay.com/photo/2021/02/15/01/23/musician-6016343_960_720.jpg' 
            profilePicture='https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg' />

            <Story 
            name='Amy Whinehouse'
            src='https://img.20mn.fr/9pYz0OSQT1SlznL2_mkYUw/310x190_amy-winehouse-back-to-black.jpg'
            profilePicture='https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/le-destin-brise-d-amy-winehouse-la-diva-malheureuse-3874856/93743832-1-fre-FR/Le-destin-brise-d-Amy-Winehouse-la-diva-malheureuse.jpg' />
            </div>
        </>
    )
}
