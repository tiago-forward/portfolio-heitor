export function SkeletonLoader({ width, height }: { width: string, height: string }) {
    return (
        <div
            style={{ width, height }}
            className="bg-gray-200 animate-pulse"
        />
    )
}