import '../app/globals.css';
import Navbar from '@/components/navbar';
import Features from '@/components/features';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Working from '@/components/howWork';
import { GlobeDemo } from '@/components/Globe';
import UseCases from '@/components/UseCases';
const Home = () => (
    <div className='  '>
        <Navbar />
        <Hero />
        <Features />
        <Working />
        <GlobeDemo />
        <UseCases/>
        <Footer />
    </div>
);

export default Home;
