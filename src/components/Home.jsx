
import ExtraSection from "./ExtraSection";
import ExtraSection2 from "./ExtraSection2";
import Places from "./Places";
import Slideshow from "./Slideshow";


const Home = () => {
    return (
        <div className="bg-blue-200">
           
            <Slideshow></Slideshow>
            <Places></Places>
            <ExtraSection></ExtraSection>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;