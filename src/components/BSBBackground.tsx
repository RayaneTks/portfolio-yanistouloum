interface BSBBackgroundProps {
  opacity?: number;
  className?: string;
}

export const BSBBackground = ({ opacity = 0.15, className = "" }: BSBBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: "url('/bsb-background.jpg'), url('/bsb-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: opacity,
      }}
    />
  );
};
