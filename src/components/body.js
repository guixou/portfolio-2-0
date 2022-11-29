import Header from './header.js';
import Footer from './footer.js';
import Content from './content'

function body () {
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

export default body;