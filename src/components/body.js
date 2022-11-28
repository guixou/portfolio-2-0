import Header from './header.js';
import Footer from './footer.js';
import Content from './content.js'

function body () {
    return (
        <div>
            <header>
                <Header />
            </header>
            <body>
                <Content />
            </body>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default body;