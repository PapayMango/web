import styles from '../styles/A_list.module.css'
import Article from './Article'
// import mysql from 'mysql2'
// import { GetStaticProps,NextPage } from 'next'

type ArticleProps = React.ComponentProps<typeof Article>
type A_listProps = {
    articles:ArticleProps[]
} 

// let db = {
//     host:'localhost',
//     user:'user',
//     password:'web',
//     database:'web'
// }

// function A_list(props:Array<ArticleProps>):NextPage<Array<ArticleProps>>{
function A_list({articles}:A_listProps){
    let list = []
    // for(let i of props){
    for(let i of articles){
        list.push(<Article {...i} />)
    }
    return (
        <div>
            {list}
        </div>
    )
}

// export const getStaticProps:GetStaticProps<{articles:ArticleProps[]}> = async (context) => {
//     let articles:ArticleProps[] = []
//     let connection = mysql.createConnection(db)
//     console.log(connection)
//     return {
//         props:{
//             articles,
//         },
//     }
// }

export default A_list