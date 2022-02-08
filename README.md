## A react hook for getting a variable previous state

### Install

```
npm i @saulpalv/use-responsive-class-effect

//or

yarn add @saulpalv/use-responsive-class-effect
```

### Usage

```tsx
import { muiBreakPoints, useResponsiveClassNameEffect } from "@saulpalv/use-responsive-class-effect"

export const App = () => {

    const className = useResponsiveClassNameEffect(muiBreakPoints)

    return (
        <div css={{
            /**
             * Blue background style applied on medium (md) breakpoint 
             * range 1200px > windows width > 900px
             */
            '.md &': { backgroundColor: 'blue' }
        }}>
            hello
        </div>
    )
}
```
