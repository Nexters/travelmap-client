import { style } from '@vanilla-extract/css';

import { COLOR } from '@/styles/foundation';
import { sprinkles } from '@/styles/sprinkle.css';

export const wrapper = style({
    maxWidth: '429px',
    padding: '16px 18px',

    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',

    ':hover': {
        borderRadius: '100px',
        backgroundColor: `${COLOR.MonoBlack}08`
    }
});

export const indexBox = style([
    sprinkles({ typography: 'Bold16' }),
    {
        width: '26px',
        height: '26px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '0 10px',

        boxSizing: 'border-box',
        textAlign: 'center',

        border: `1px solid ${COLOR.Gray300}`,
        borderRadius: '4px',
    },
]);

export const courseBox = style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
    flexGrow: 1,
});

export const courseName = style([sprinkles({ typography: 'ExtraBold18' })]);

export const addressBox = style({
    display: 'flex',
    columnGap: '4px',
    alignItems: 'center',
    color: COLOR.LablesTertiary,
});

export const address = style([
    sprinkles({ typography: 'Regular15' }),
    { color: COLOR.LablesTertiary },
]);

export const listIcon = style({
    margin: '10px',
    cursor: 'pointer',
});
