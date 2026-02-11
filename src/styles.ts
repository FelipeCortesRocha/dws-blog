import styled from 'styled-components';
import type { Colors } from './types';

export const colors: Colors = {
    neutrals: {
        lightest: '#F0F0F2',
        'extra-light': '#E0E2E6',
        light: '#C0C2C8',
        medium: '#9EA0A5',
        dark: '#7F8185',
        'extra-dark': '#5E5F63',
        darkest: '#202122',
    },
    primary: {
        light: '#0B0E3A',
        medium: '#060725',
        dark: '#020318',
    },
    secondary: {
        light: '#EF4C84',
        medium: '#D31450',
        dark: '#8C1038',
    },
    accent: {
        light: '#00BFC1',
        medium: '#009598',
        dark: '#006C6E',
    }
}

export const AppContainer = styled.div`
    background: linear-gradient(85deg,${colors.accent.light}4D 0%, ${colors.neutrals.lightest} 23%, ${colors.neutrals['extra-light']} 73%, ${colors.secondary.light}4D 100%);
    height: 100dvh;
    width: 100dvw;
    overflow: auto;
    color: ${colors.neutrals.darkest}
`;