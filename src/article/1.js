import Footer from "../components/Footer";
import Header from "../components/header";

const Article1 = () => {
	const data1 = {
		title: "The distance between Zero and Allah (Part 1)",
		desc: "Those who deny Allah as the one and only creator of the world, they say The entire world has been created automatically by nature. We had a strong proof against it. But after the invention of Quantum Mechanics they have a strong theory. Quantum Mechanics has a theory named Quantum Fluctuation.  The quantum Fluctuation says that nothing is  absolutely blank  in our universe. Nature doesn't like blank space.  That's why there is a blank space is filled up within a very very short time(Maybe 1 billion ato second). It is filled up by creating matters and anti-matters. They are destroyed by each other's friction. Now this theory has come from the uncertainty theory of heisenberg. Heisenberg said that we can never exactly measure the position and momentum of a particle. This theory can be used in the case of Energy and Time. If this is true then there can be nothing called blank space in the universe. If exists then the position and the momentum both comes 0. This is against the theory of heisenberg. The disbelievers say that we say there is nothing before big bang. Not even time not even energy. Then how did big bang happen??? It needed energy to explode. The disbelievers say that there is no contribution of Allah in big bang. It happens only for Quantum Fluctuation. It means science says no to the existence of Allah (Nauzubillah). But we all believers believe that it is not true. But how?? I will give the explanation in my next article. Source: Paradoxical Sajid"
	}
  return (
    <>
      <Header />
      <div className="article-blog">
				<h1 className="title-blog">{data1.title}</h1>
				<p className="desc">
					{data1.desc}
				</p>
			</div>
			<Footer />
    </>
  );
};

export default Article1;
