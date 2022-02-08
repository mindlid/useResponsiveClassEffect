const muiBreakPointsKeyArray = ['xs', 'sm', 'md', 'lg', 'xl'] as const
type muiBreakPointsKeys = typeof muiBreakPointsKeyArray[number]
/**  Based on https://mui.com/customization/breakpoints */
export const muiBreakPoints: { [key in muiBreakPointsKeys]: number } = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
} as const

const tailwindBreakPointsKeyArray = ['sm', 'md', 'lg', 'xl', '2xl'] as const
type tailwindBreakPointsKeyArrayBreakPointsKeys = typeof tailwindBreakPointsKeyArray[number]
/** Based on https://tailwindcss.com/docs/responsive-design */
export const tailwindBreakPoints: { [key in tailwindBreakPointsKeyArrayBreakPointsKeys]: number } = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
} as const