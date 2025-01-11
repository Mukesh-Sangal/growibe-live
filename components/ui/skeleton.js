import { cn } from '../../lib/utils'

function Skeleton(props) {
  const { className, ...restProps } = props
  return (
    <div
      className={cn('animate-pulse rounded-md bg-slate-300', className)}
      {...restProps}
    />
  )
}

export { Skeleton }
