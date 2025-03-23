import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 w-full h-full p-4 border rounded-lg">
      {/* Header - Company logo and duration */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-10 rounded-md" /> {/* Company logo */}
        <Skeleton className="h-4 w-24" /> {/* Duration */}
      </div>
      
      {/* Title */}
      <Skeleton className="h-6 w-3/4" />
      
      {/* Company name */}
      <Skeleton className="h-4 w-1/2" />
      
      {/* Description */}
      <div className="space-y-2 flex-grow">
        <Skeleton className="h-4 w-full" />
      </div>
      
      {/* Skills/tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  )
}