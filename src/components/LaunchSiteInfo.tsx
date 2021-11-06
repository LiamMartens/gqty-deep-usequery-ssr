import React from 'react';
import { useQuery } from '../gqty';

type Props = {
    id: string;
}

export const LaunchSiteInfo: React.FC<Props> = ({ id }) => {
    const query = useQuery();
    const launchpad = query.launchpad({ id });

    return (
        <div>
            <hr />
            {launchpad?.name}
        </div>
    )
}