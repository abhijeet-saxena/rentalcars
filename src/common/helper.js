import { keyframes } from 'styled-components';

// Global Colors Used
export const colors = {
    primaryBlue: '#1E79CA',
    primaryBlueLight: '#E7F4FE',
    secondaryGreen: '#3D8425',
    secondaryYellow: '#F7B732',
    textDark: '#333',
    textLight: '#FFF',
    textBlue: '#1273C4',
    backgroundGray: '#f5f5f5',
    border: '#e7e7e7',
    badgeRed: '#961412',
    badgeBlue: '#1263b0',
    badgeGray: '#474747',
    badgeYellow: '#f1c74c',
};

// Used in loading spinner
export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Used by accordion
export const togglePanel = ({ target }) => {
    target.classList.toggle('expanded');
    let content = target.nextElementSibling;

    if (content.style.height) {
        content.style.height = null;
        content.style.margin = '0px';
    } else {
        content.style.height = `${content.scrollHeight + 16}px`;
        content.style.margin = '0 1rem 1rem';
    }
};

// Used to debounce API calls while searching
// PERFORMANCE IMPROVEMENT
export const debounce = (f, delayInMS = 250) => {
    let timer;

    return function (...args) {
        let that = this;

        clearTimeout(timer);
        timer = setTimeout(() => {
            f.apply(that, [...args]);
        }, delayInMS);
    };
};

// All possible times in selecting Pickup/Drop time
export const times = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
];
