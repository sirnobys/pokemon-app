import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ListView from './views/ListView';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/list" element={<ListView />} />
                {/* <Route index element={<ListView />} />  */}
                <Route path="*" element={'404'} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main