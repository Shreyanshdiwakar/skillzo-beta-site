import Image, { ImageProps } from "next/image";

// Add types for remaining props
type PlaceholderImageProps = {
  width: number;
  height: number;
} & Omit<ImageProps, "width" | "height" | "alt" | "src">;

const PlaceholderImage = ({ width, height, ...props }: PlaceholderImageProps) => (
  <Image
    src={`https://placehold.co/${width}x${height}/#262626`}
    alt={`${width}x${height}`}
    width={width}
    height={height}
    unoptimized
    {...props}
  />
);

export default function PhotosSection() {
    return (
        <section className="px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted lg:col-span-2 lg:aspect-auto">
                        <PlaceholderImage width={700} height={300} className="object-cover object-center h-full w-auto" />
                </div>
                <div className="flex aspect-square flex-col justify-between rounded-md bg-muted">
                <PlaceholderImage width={300} height={300} className="object-cover object-center h-full w-auto" />
                </div>
                <div className="flex aspect-square flex-col justify-between rounded-md bg-muted ">
                <PlaceholderImage width={300} height={300} className="object-cover object-center h-full w-auto" />
                    
                </div>
                <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted lg:col-span-2 lg:aspect-auto">
                <PlaceholderImage width={700} height={300} className="object-cover object-center h-full w-auto" />
                    
                </div>
            </div>
        </section>

    );
}
