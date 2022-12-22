import styles from '../styles/Article.module.css'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    src:string,
    alt:string,
    title:string,
    descript:string
}

function Article(props:Props){
    return (
        <article className="Article" >
            <Link href=''>
                <Image loading='lazy' src={props.src} alt={props.alt} width={500} height={300} />
                <h2>{props.title}</h2>
                <p>{props.descript}</p>
            </Link>
        </article>
    );
}

export default Article