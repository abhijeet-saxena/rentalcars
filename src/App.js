import { Flex } from './common/components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Flex flexDirection="column" width="100vw">
            <Header />
            <Main />
            <Footer />
        </Flex>
    );
}

export default App;
