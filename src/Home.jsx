import './Home.css';
import Free from './components/free/Free';
import Popular from './components/popular/Popular';
import SearchHome from './components/search-home/SearchHome';
import Trailers from './components/trailers/Trailers';
import Trending from './components/trending/Trending';

function Home () {
  return (
    <div className="">
      <SearchHome />
      <Trending />
      <Trailers />
      <Popular />
      <Free />
    </div>
  );
}

export default Home;
