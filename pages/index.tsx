import Head from "next/head"
import A_list from "../components/A_list"
import Article from "../components/Article"
import { GetStaticProps } from "next"
// import mysql from 'mysql2'
import mysql from 'mysql2/promise'

type ArticleProps = React.ComponentProps<typeof Article>
type A_listProps = {
    articles:ArticleProps[]
}

let db = {
    host:'localhost',
    user:'user',
    password:'web',
    database:'web'
}

export default function Home({articles}:A_listProps){
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>

            </header>
            <main>
                <A_list articles={articles}/>
            </main>
            <footer>

            </footer>
        </>
    )
}

export const getStaticProps:GetStaticProps<{articles:ArticleProps[]}> = async (context) => {
    console.log('getstaticprops');
    console.log(context);
    let articles:ArticleProps[] = []
    let a = []
    let connection = await mysql.createConnection(db)
    // console.log(connection)
    // connection.connect()
    a.push('a')
    try {
        let [rows,fields] = await connection.query('select src,alt,title,descript from web')
            if(rows instanceof Array)
                rows.forEach(element => {
                    console.log(element);
                    articles.push(element as ArticleProps)
                });
    } catch (error) {
        console.log(error);
    } finally {
        connection.end()
        a.push('b')
    }
    // connection.query('select * from web',(err,res,fields)=>{
    //     if (err) throw err
    //     console.log(res);
    //     a.push('b')
    //     if (res instanceof Array)
    //         res.forEach(element => {
    //             // let article:ArticleProps = {
    //             //     src: "",
    //             //     alt: "",
    //             //     title: "",
    //             //     descripion: ""
    //             // }
    //             let article = {}
    //             // console.log(element);
    //             // console.log(typeof element);
    //             // console.log('src' in element);
    //             if ('src' in element) console.log(element.src);
    //             for (let i in element){
    //                 console.log(i);
    //                 console.log(element[i as keyof typeof element]);
    //                 if (i === 'id') continue
    //                 article[i as keyof typeof element] = element[i as keyof typeof element]
    //                 console.log(article);
    //             }
    //             console.log(article as ArticleProps);
    //             articles.push(article as ArticleProps)
    //             // console.log(element instanceof ArticleProps);
    //         });
    //     // if (typeof res == 'Array')
    //     // res.array.forEach(element => {
            
    //     // });
    //     // for(let r in res){
    //     //     console.log(r);
    //     //     console.log();
    //     // }
    // })
    console.log('a : ',a)
    console.log('Articles', articles);
    return {
        props:{
            articles,
        },
    }
}