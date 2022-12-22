import styles from '../styles/Article.module.css'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    src:string,
    alt:string,
    title:string,
    descripion:string
}

function Article(props:Props){
    return (
        <article className="Article">
            <Link href=''>
                <Image loading='lazy' src={props.src} alt={props.alt} width={100} height={100} />
                <h2>{props.title}</h2>
                <p>{props.descripion}</p>
            </Link>
        </article>
    );
}

export default Article