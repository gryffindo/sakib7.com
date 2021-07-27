import Header from '../components/header'
import  '../styles/article.css';
import '../styles/main.css'
import Data from '../data.json';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

const Article = () => {
	// function handleClick (e) {
	// 	e.preventDefault()
	// }
	// const {data: blogs, isPending, error} = useFetch('data.json')
	return (  
		<>
		<Header />
		<h1 className="hello_kitty">Articles</h1>
		<div className="art_list">
		{Data.map(post => {
			return(
				<div key={post.id} className="art">
					<h1 className='art_tit'>{post.title}</h1>
					<p>{post.spoiler}</p>
					<Link to={`/article/${post.id}`}>Jump Into it</Link>
					<span>{post.author}</span>
				</div>
			)
		})}
		</div>
		<Footer />
		</>
	);
}
 
export default Article;