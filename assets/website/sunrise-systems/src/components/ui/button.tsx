import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-3 py-3 rounded-[5px] text-base',
        icon: 'h-10 w-10 rounded-[5px]',
        lg: 'h-11 px-4 rounded-[5px] text-base',
        sm: 'h-9 px-2 rounded-[5px] text-base',
      },
      variant: {
        default: 'text-foreground hover:text-primary',
        primary: 'bg-primary text-white hover:bg-primary/90 font-mono uppercase',
        'arrow-button-primary': 'bg-primary text-white hover:bg-primary/90 font-mono rounded-[5px] px-12 py-6',
        'arrow-button-cta': 'bg-white text-primary hover:bg-white/90 font-mono rounded-[5px] px-12 py-6',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'text-foreground items-start justify-start underline-offset-4 hover:underline',
        outline: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white rounded-[5px] font-mono uppercase',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'arrow-button-secondary': 'bg-[#D9D9D9] text-foreground hover:bg-[#BEBEBE] rounded-[5px] px-12 py-6',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }
