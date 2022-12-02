import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content'

export default function Body () {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div>
                <Content />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}