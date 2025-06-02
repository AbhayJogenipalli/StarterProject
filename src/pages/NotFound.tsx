import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function NotFound() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
      <Alert variant="destructive">
        <AlertTitle>Not Found</AlertTitle>
        <AlertDescription className="text-xl">
          404 - Page Not Found
        </AlertDescription>
      </Alert>
    </div>
  );
}
