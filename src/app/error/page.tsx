export default function ErrorPage() {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-black dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Something went wrong</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Apologies, but an unexpected error has occurred. Please try again later.
        </p>
      </div>
    </div>
  ) 
}