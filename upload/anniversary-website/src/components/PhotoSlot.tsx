interface PhotoSlotProps {
  label?: string;
  src?: string;
  alt?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  rotate?: number;
}

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function PhotoSlot({
  label = "Add Your Photo Here",
  src,
  alt = "Our memory",
  aspectRatio = "square",
  className = "",
  rotate = 0,
}: PhotoSlotProps) {
  return (
    <div
      className={`photo-slot relative overflow-hidden rounded-2xl shadow-lg ${aspectClasses[aspectRatio]} ${className}`}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        border: "3px solid rgba(255,255,255,0.8)",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-3 text-center p-4"
          style={{
            background: "linear-gradient(135deg, #fdf0f3 0%, #f9e5ea 50%, #fce4ec 100%)",
          }}
        >
          {/* Camera icon */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "rgba(201,116,143,0.12)" }}
          >
            <svg
              className="w-7 h-7"
              style={{ color: "#c9748f" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
          <div>
            <p
              className="text-sm font-light"
              style={{ color: "#c9748f", fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem" }}
            >
              {label}
            </p>
            <p className="text-xs mt-1" style={{ color: "#d4a0b0" }}>
              Replace src with your image path
            </p>
          </div>
        </div>
      )}

      {/* Soft inner glow overlay */}
      {src && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(201,116,143,0.1) 0%, transparent 50%)",
          }}
        />
      )}
    </div>
  );
}
