import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function ErrorPage({ status = 404 }) {
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[status];

    return (
        <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center p-4 text-center">
            <div className="flex flex-col items-center max-w-md mx-auto space-y-6 text-center">
                <div className="p-6 rounded-full bg-muted">
                    <AlertTriangle className="w-12 h-12 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {title}
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-[500px] md:text-xl/relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <Button
                        variant="outline"
                        className="inline-flex items-center justify-center"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>

                    <Button asChild>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
