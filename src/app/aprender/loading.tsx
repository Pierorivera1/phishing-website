import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function LearnLoading() {
  return (
    <Card className="rounded-none border-4 border-border bg-card p-6 sm:p-10 shadow-[6px_6px_0px_0px_var(--secondary)]">
      <CardHeader className="p-0 mb-8 border-b border-border pb-8">
        {/* Simulación del icono superior */}
        <Skeleton className="mb-4 h-12 w-12 border-2 border-border" />
        {/* Simulación del título principal */}
        <Skeleton className="h-8 w-1/3 mb-4" />
        {/* Simulación del subtítulo */}
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>

      <CardContent className="p-0 space-y-6">
        {/* Simulación de párrafos de lectura */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[95%]" />
          <Skeleton className="h-4 w-[92%]" />
          <Skeleton className="h-4 w-[85%]" />
        </div>

        {/* Simulación de una caja destacada (Dato Crítico / Alerta) */}
        <Card className="my-8 rounded-none border-4 border-primary/10 bg-primary/5 p-6 sm:p-8 shadow-none">
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="h-10 w-10 border-2 border-border" />
            <Skeleton className="h-6 w-1/4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </Card>

        {/* Más párrafos */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[98%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>
      </CardContent>

      {/* Simulación del botón inferior */}
      <div className="mt-12 flex justify-end border-t border-border pt-8">
        <Skeleton className="h-12 w-44" />
      </div>
    </Card>
  );
}
