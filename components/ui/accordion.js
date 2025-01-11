'use client'

import React, { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef((props, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', props.className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 lg:text-1xl no-underline text-xl',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef((props, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden lg:text-2xl text-1xl text-sky-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      props.className
    )}
    {...props}
  >
    <div className='pb-4 pt-0 text-[20px]'>{props.children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
