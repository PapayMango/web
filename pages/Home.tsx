import './Home.css'
import Article from './Article'
import mysql from 'mysql2'
import { GetStaticProps, PreviewData } from 'next'

type ArticleProps = React.ComponentProps<typeof Article>

let db = {
    host:'localhost',
    user:'user',
    password:'web',
    database:'web'
}

function Home_(props:Array<ArticleProps>){
    let list = []
    for(let i of props){
        list.push(<Article {...i} />)
    }
    return (
        <main>

        </main>
    )
}

export const getStaticProps:GetStaticProps<{articles:ArticleProps[]}> = async (context) => {
    let articles:ArticleProps[] = []
    let connection = mysql.createConnection(db)
    console.log(connection)
    return {
        props:{
            articles,
        },
    }
}

export default Home_