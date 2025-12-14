interface ImageCardProps {
  imageSrc: string;
  label: string;
  onClick: () => void;
  delay?: number;
}

export function ImageCard({ imageSrc, label, onClick, delay = 0 }: ImageCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square w-full overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-600 ease-out-expo"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-600 ease-out-expo group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out-expo">
        <span className="inline-block px-4 py-2 bg-card/95 backdrop-blur-sm text-foreground font-serif text-lg rounded-md">
          {label}
        </span>
      </div>
      <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <span className="inline-block px-3 py-1.5 bg-card/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-md shadow-sm">
          {label}
        </span>
      </div>
    </button>
  );
}
