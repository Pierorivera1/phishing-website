import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function GalleryLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      {/* Título de la galería */}
      <div className="mb-10 text-center">
        <Skeleton className="mx-auto h-8 w-48 mb-4" />
        <Skeleton className="mx-auto h-4 w-80" />
      </div>

      {/* Cuadrícula de tarjetas de simulación */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="border-4 border-border bg-card p-4 rounded-none shadow-[6px_6px_0px_0px_var(--secondary)]">
            {/* Imagen simulada de la captura de pantalla */}
            <Skeleton className="w-full aspect-[4/3] border-2 border-border mb-4" />
            {/* Título de la tarjeta */}
            <Skeleton className="h-5 w-3/4 mb-3" />
            {/* Descripción rápida */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
