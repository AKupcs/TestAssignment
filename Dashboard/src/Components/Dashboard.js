import '../Assets/Styles/Dashboard.css';

import Header from './Header';
import Content from './Content';

function Dashboard() {
    return(
        <div className='dashboard'>
            <Header />
            <div className='dashboard_centerSection'>
                <div className='navigation'>
                    <div className='navigation_item-selected'/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <Content />
            </div>
            
        </div>
    )
}

export default Dashboard;