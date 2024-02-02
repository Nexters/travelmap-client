import { style } from '@vanilla-extract/css';

import { COLOR } from '@/styles/foundation';
import { sprinkles } from '@/styles/sprinkle.css';

export const sidePanel = style({
    width: 'max-content',
    minWidth: '505px',
    height: `calc(100vh - 64px)`,
    padding: '30px',

    display: 'flex',
    flexDirection: 'column',
    rowGap: '18px',

    flexGrow: 1,
    borderRadius: '6px',
    backgroundColor: COLOR.SurfaceLevel1,
    overflowY: 'hidden',
});

export const header = style({
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
    marginBottom: '8px',
});

export const courseName = style([
    sprinkles({ typography: 'Black20' }),
    {
        flexGrow: 1,
    },
]);

export const backArrowIcon = style({
    color: COLOR.Gray900,
});

export const modifyIcon = style({
    color: COLOR.Gray400,
});

export const courseViewWrapper = style({
    height: '100%',
});

export const hidden = style({
    display: 'none',
});
