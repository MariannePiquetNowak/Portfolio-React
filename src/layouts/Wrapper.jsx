import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';
import SkillsHide from './SkillsHide';
import Jobs from './Jobs';

const Wrapper = ({locale}) => {
    return (
        <div className="wrapper scroll-container">
            <Header locale={locale} />
            <div className="skills__wrapper">
                <Skills locale={locale}/>
                <SkillsHide />
                <Jobs />
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper;