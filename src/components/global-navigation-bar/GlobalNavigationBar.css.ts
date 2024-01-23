import { style } from '@vanilla-extract/css';

import { COLOR } from '@/styles/foundation';
import { sprinkles } from '@/styles/sprinkle.css';

export const wrapper = style({
    width: '100vw',
    padding: '17px 30px',

    display: 'flex',
    alignItems: 'center',
    
    position: 'sticky',
    top: 0,
    zIndex: 999,

    backgroundColor: COLOR['MonoWhite'],
    borderBottom: `1px solid ${COLOR['Gray50']}`,
});

export const savedText = style([
    sprinkles({ typography: 'Regular15' }),
    {
        marginLeft: '4px',
        marginRight: 'auto'
    },
]);

export const settingIcon = style({
    color: COLOR['Gray500']
})