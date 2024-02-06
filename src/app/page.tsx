import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality <span className="text-purple-600">digital assets</span>.
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to SwiftCart. Every asset on this site is hand-picked by our team to ensure the highest quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products">
            Browse Trending
          </Link>
        </div>


      </div>
    </MaxWidthWrapper>
  )
}
