import Header from "../components/header";
import Footer from '../components/Footer'

const Article2 = () => {
	const data2 = {
		title: 'Why 1 is not a prime Number??',
		desc: "মৌলিক সংখ্যার সংজ্ঞানুশারে 1 একটি মৌলিক সংখ্যা হওয়ার কথা. তবে, 1 কে মৌলিক সংখ্যার সেট এ স্থান দেয়া হয়নি. বেচারা 1😔. কিন্তু 1 এর সাথে এমন নিষ্ঠুরোতার কারণটা আসলে কি?? এই বিষয়টি বোঝার পূর্বে আমাদের মৌলিক সংখ্যার প্রয়োজনীয়তা নিয়ে জানতে হবে. মনে করুন, 45 একটি যৌগিক সংখ্যা (মনে করার কি আছে এটা তো যৌগিক ই😅 ). আমরা এখন বের করবো 45 এর মধ্যে মৌলিক কারা কারা আছে. এর ভিতরে দুইটা 3 আছে আর একটা 5 আছে. 45=3²5. আর কোনোভাবেই কিন্তু 45 কে মৌলিক সংখ্যা দিয়ে প্রকাশ করা যায় না. এভাবে লেখাকে বলে মৌলিক সংখ্যার সুচকের গুনফল আকারে প্রকাশ বা Prime Power Factorization. নম্বর থিওরি এর খুব গুরুত্বপূর্ণ একটা উপপাদ্য হলো, কোনো পূর্ণসংখ্যাকে অনন্য উপায়ে অর্থাৎ শুধু একভাবে মৌলিক সংখ্যার সূচকের গুনফল আকারে লেখা যাবে. এটাকে বলে পাটিগণিতের মূল উপপাদ্য বা Fundamental Theorem of Arithmatic বলে. এই উপপাদ্য ব্যবহার করে আরো অজস্র উপপাদ্য প্রমান করা হয়েছে. এখন যদি 1 কে মৌলিক ধরা হয়, তাহলে এই অনন্যতার বিষয়টি আর থাকে না. কেউ লিখবে 45=1²3²5. কেউ লিখবে 45=1³3²5. কেউ লিখতে পারে 45=1²²²3²*5. এর ফলে অনন্যতার বিষয় টি আর থাকছে না যেটির উপর হাজারো উপপাদ্য টিকে আছে. তাই 1 কে মৌলিক সংখ্যা থেকে বাদ দেয়া হয়েছে. Credits: চমক হাসান (অঙ্ক ভাইয়া )"
	}
  return (
		<>
		<Header />
		<div className="article-blog">
			<h1 className="title-blog">{data2.title}</h1>
			<p className="desc">
				{data2.desc}
			</p>
		</div>
		<Footer />
	</>
  );
};

export default Article2;
