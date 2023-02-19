import { DashboardCard } from '../containers/DashboardCard';

import containerStyles from "../../styles/containers.module.css";


export default function Dashboard() {
    return(
        <div className={containerStyles.dashboard_container}>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
        </div>

    );
}