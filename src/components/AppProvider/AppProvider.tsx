import type {FC, ReactNode} from 'react';
import {OmniProvider} from 'react-omni-provider';

import {providerConfig} from './providerConfig';

export type ProviderProps = {
    children: ReactNode;
};

export const AppProvider: FC<ProviderProps> = ({children}) => {
    return <OmniProvider providerConfig={providerConfig}>{children}</OmniProvider>;
};
