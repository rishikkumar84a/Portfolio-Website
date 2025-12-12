import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
