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
        // <article className="Article" >
        <article className="bg-amber-300 border-neutral-700 border-2 m-2 p-2" >
            <header className='bg-lime-300'>
                <Link className='text-sky-600' href='/'>Tag</Link>
                <time className='ml-2.5'>2022年12月12日</time>
                <h1><Link className='text-sky-600' href='/'>{props.title}</Link></h1>
            </header>
            <Link href='/'>
                <Image loading='lazy' src={props.src} alt={props.alt} width={500} height={300} />
            </Link>
            <footer className='bg-cyan-300 p-2'>
                <Link className='text-sky-600' href='/'>
                    <p className='bg-emerald-300'>{props.descript}
                        <span>続きを読む</span>
                    </p>
                </Link>
            </footer>
        </article>
    );
}

export default Article