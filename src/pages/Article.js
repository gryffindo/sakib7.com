import Header from '../components/header'
import  '../styles/article.scss';
import '../styles/main.scss'
import Data from '../data.json';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

const Article = () => {
	return (  
		<>
		<Header />
		<h1 style={{marginTop: "100px"}} className="hello_kitty">Articles</h1>
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