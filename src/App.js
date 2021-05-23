import { Flex } from './common/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Flex flexDirection="column" width="100vw" alignItems="center">
            <Header />
            <Main />
            <Footer />
        </Flex>
    );
}

export default App;
