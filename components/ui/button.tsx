import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_4px_rgba(0,119,255,0.4)] hover:shadow-[0_0_25px_6px_rgba(0,119,255,0.6)] ring-2 ring-blue-400/30 hover:ring-blue-400/50',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        glow: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_8px_rgba(0,119,255,0.5)] hover:shadow-[0_0_35px_12px_rgba(0,119,255,0.7)] ring-4 ring-blue-400/40 hover:ring-blue-400/60 hover:scale-105 transform transition-all duration-300',
        'glow-secondary': 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_25px_8px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_12px_rgba(147,51,234,0.7)] ring-4 ring-purple-400/40 hover:ring-purple-400/60 hover:scale-105 transform transition-all duration-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
