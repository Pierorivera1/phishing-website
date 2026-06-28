import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function TipsLoading() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      {/* Título */}
      <div className="mb-8 text-center">
        <Skeleton className="mx-auto h-8 w-40 mb-3" />
        <Skeleton className="mx-auto h-4 w-64" />
      </div>

      {/* Tarjetas de consejos */}
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="border-4 border-border bg-card p-6 rounded-none shadow-[6px_6px_0px_0px_var(--secondary)]">
            <div className="flex gap-4 items-start">
              {/* Icono de consejo */}
              <Skeleton className="h-10 w-10 shrink-0 border-2 border-border" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[95%]" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
