import { LayoutFrame, SideNavBar, TopBar } from 'app-layout-frame';

function App() {
    return (
        <LayoutFrame
            sideNav={<SideNavBar />}
            topBar={<TopBar />}
            isLegacyPage={false}
        >
            test
        </LayoutFrame>
    );
}

export default App;
