"use client"

import { ComponentProps, FC, ReactNode } from "react"
import {
    motion,
    AnimationControls,
    Target,
    TargetAndTransition,
    Transition,
    VariantLabels
} from "framer-motion"

export interface AnimationProps extends ComponentProps<"div"> {
    children: ReactNode
    initial?: boolean | Target | VariantLabels
    whileInView?: VariantLabels | TargetAndTransition
    exit?: TargetAndTransition | VariantLabels
    transition?: Transition
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean
    layoutId?: string | undefined
}

export const Animation: FC<AnimationProps> = ({
    children,
    initial,
    whileInView,
    animate,
    exit,
    transition,
    layoutId,
    className
}) => {

    return (
        <motion.div
            layoutId={layoutId}
            initial={initial}
            whileInView={whileInView}
            exit={exit}
            transition={transition}
            animate={animate}
            className={className}
        >
            {children}
        </motion.div>
    )
}
