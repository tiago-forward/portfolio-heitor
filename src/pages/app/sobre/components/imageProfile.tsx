import { SkeletonLoader } from "@/components/SkeletonLoader/skeletonLoader"
import { useState } from "react"

export interface ImageProfileProps {
    image: {
        id: number
        label: string
        url: string
    }
}

export function ImageProfile({ image }: ImageProfileProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <div className="border border-black" key={image.id}>
                {isLoading && <SkeletonLoader width="150px" height="208px" />}
                <img
                    src={image.url}
                    alt={image.label}
                    className={`h-52 w-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                    onLoad={() => setIsLoading(false)}
                />
            </div>
            <h2 className="font-semibold text-client-TextSecondary">{image.label}</h2>
        </>
    )
}
