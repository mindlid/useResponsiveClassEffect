import { useWindowDimensions } from "@saulpalv/use-window-dimensions"
import { useState } from "react"
import { addRootClass, rootContainsClass, removeRootClass } from "./domClassList"

type BreakPointsDefinition = { [key: string]: number }
/**
 * Listens the window width and tries to match it with one of the provided breakpoint definitions,
 * if a breakpoint is matched its className is set on the root node ( side effect )
 * and its value returned.
 * 
 * In sass/emotion you can select using the sass ampersand as descendant of the breakpoint :
 *  ```tsx
 * //md breakpoint example
 * <span css={{'.md &': { fontsize : '1.25rem' } }}>
 *  ```
 */
export const useResponsiveClassEffect = (_points: BreakPointsDefinition): string | null => {
    // Freeze the first passed value
    const [points] = useState<BreakPointsDefinition>(_points)
    const { width } = useWindowDimensions()
    const className = getMinWidthBreakPointClass(width, points)
    if (className) {
        clearResponsiveClasses(points)
        addRootClass(className)
    }
    return className
}

const getMinWidthBreakPointClass = (width: number, points: BreakPointsDefinition): string | null => {
    const breakPoints = Object.entries(points)
    return breakPoints.length >= 2
        ? breakPoints
            .sort(([, mwa], [, mwb]) => mwa - mwb)
            .filter(([, minWidth], i) =>
                minWidth >= width
                || (i + 1) === breakPoints.length)
        [0]?.[0] ?? null
        : breakPoints.length === 1
            ? breakPoints[0][0]
            : null
}

const clearResponsiveClasses = (points: BreakPointsDefinition): void => {
    Object.keys(points).forEach(className => {
        if (rootContainsClass(className)) removeRootClass(className)
    })
}