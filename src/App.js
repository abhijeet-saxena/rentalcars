import { Flex } from './common/styles';
import { Header, Main, Footer } from './components/';

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
