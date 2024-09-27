import { FC } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
    followerData: number[];
    userNames: string[];
}

export const GraphBar: FC<Props> = ({ followerData, userNames }) => {
    const data = {
        labels: userNames,
        datasets: [
            {
                label: 'Number of Followers',
                data: followerData,
                backgroundColor: '#1e81cc',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Followers of Top ${userNames.length} Users`,
            },
        },
    };

    return (
        <Bar data={data} options={options} />
    )
}
