import React from 'react';
import { useQuery } from '../gqty';

type Props = {
    query: ReturnType<typeof useQuery>;
    id: string;
}

export const LaunchSiteInfo: React.FC<Props> = ({ query, id }) => {
    const launchpad = query.launchpad({ id });

    return (
        <div>
            <hr />
            {launchpad?.name}
        </div>
    )
}