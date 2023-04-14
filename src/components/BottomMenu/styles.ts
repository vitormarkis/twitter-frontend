import styled, { css } from 'styled-components';

import { Home, Search, Notifications, Email } from '../../styles/Icons'


export const Container = styled.div`
    @media (min-width: 540px) { display: none; }

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;

    background: var(--primary);
    width: 100%;
    border-top: 1px solid var(--outline);
    
    display: flex;
    
    justify-content: space-between;
    padding: 8px min(46px, max(10vw, 10px));
    /* 46px é o máximo, e 10px é o mínimo, entre eles, fica o 10vw */
`;

// const iconCSS = css`
//     width: 31px;
//     height: 31px;

//     cursor: pointer;
//     fill: var(--gray);

//     &:hover,
//     &.active {
//         fill: var(--twitter)
//     };
// `  ;

const iconCSS = css({
    width: '31px',
    height: '31px',

    cursor: 'pointer',
    fill: 'var(--gray)',

    '&:hover, &.active': {
        fill: 'var(--twitter)'
    }
})



export const HomeIcon = styled(Home)`${iconCSS}`;

export const SearchIcon = styled(Search)`${iconCSS}`;

export const BellIcon = styled(Notifications)`${iconCSS}`;

export const EmailIcon = styled(Email)`${iconCSS}`;