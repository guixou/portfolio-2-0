import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content';
import LanguageValuetProvider from '../context/LanguageValue.js';
import DataLanguageProvider from '../context/DataLanguage.js';

export default function Body () {
    return (
        <div>
            <DataLanguageProvider>
                <LanguageValuetProvider>
                    <header>
                        <Header />
                    </header>
                    <div>
                        <Content />
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </LanguageValuetProvider>
            </DataLanguageProvider>
        </div>
    );
}
