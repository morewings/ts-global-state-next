import type {ReactNode} from 'react';

import {StoreProvider} from '@/src/state/StoreProvider';
import {AppProvider} from '@/src/components/AppProvider';
import './index.css';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <StoreProvider>
                    <AppProvider>{children}</AppProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
