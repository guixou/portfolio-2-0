import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content';
import LanguageValuetProvider from '../context/LanguageValue.js';
import DataLanguageProvider from '../context/DataLanguage.js';
import ProjectValueProvider from '../context/ProjectValue.js';

export default function Body () {
    return (
        <div>
            <ProjectValueProvider>
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
            </ProjectValueProvider>
        </div>
    );
}
