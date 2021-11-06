import React from 'react';
import { useQuery } from '../gqty'
import { LaunchSiteInfo } from './LaunchSiteInfo';

type Props = {
    query: ReturnType<typeof useQuery>;
}

export const LaunchesList: React.FC<Props> = ({ query }) => {
    const launches = query.launchesPast({ limit: 10 });
    // @README commenting this in, makes it so the cache is populated and the <LaunchSiteInfo /> works without fetching on client side
    // const launchpad = query.launchpad({ id: 'vafb_slc_4e' });
    // console.log(launchpad?.name);

    return (
        <ul>
            {launches?.map((launch, index) => (
                <li key={index}>
                    {launch?.mission_name}
                    {launch?.launch_site?.site_id === 'vafb_slc_4e' && (
                        <LaunchSiteInfo query={query} id={launch.launch_site.site_id} />
                    )}
                </li>
            ))}
        </ul>
    )
}