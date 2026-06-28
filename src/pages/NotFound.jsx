import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-center text-gray-200">
      <h1 className="text-6xl font-bold text-indigo-500">404</h1>
      <p className="mt-4 text-gray-400">
        Oops — the page you're looking for doesn't exist.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </div>
  );
}
