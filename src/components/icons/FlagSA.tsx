export const FlagSA = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Saudi Arabia flag"
  >
    {/* Fond vert saoudien */}
    <rect width="640" height="480" fill="#006C35"/>
    
    {/* Épée blanche horizontale pointant vers la gauche (côté mât) */}
    <g transform="translate(320, 240)">
      {/* Lame de l'épée */}
      <rect x="-160" y="-10" width="320" height="20" fill="#ffffff" rx="2"/>
      
      {/* Garde de l'épée (verticale au centre) */}
      <rect x="-15" y="-28" width="30" height="56" fill="#ffffff" rx="3"/>
      
      {/* Poignée (à droite) */}
      <rect x="160" y="-12" width="50" height="24" fill="#ffffff" rx="3"/>
      
      {/* Pointe de l'épée (triangle pointant vers la gauche) */}
      <path d="M -160 -10 L -190 0 L -160 10 Z" fill="#ffffff"/>
    </g>
    
    {/* Shahada (profession de foi) - représentation stylisée du texte arabe calligraphique */}
    <g transform="translate(320, 140)" fill="#ffffff" opacity="0.95">
      {/* Motifs calligraphiques représentant la shahada */}
      <rect x="-180" y="-6" width="360" height="12" rx="6"/>
      <rect x="-160" y="-14" width="320" height="8" rx="4" opacity="0.7"/>
      <rect x="-140" y="8" width="280" height="8" rx="4" opacity="0.7"/>
      <rect x="-120" y="-20" width="240" height="6" rx="3" opacity="0.5"/>
      <rect x="-100" y="14" width="200" height="6" rx="3" opacity="0.5"/>
    </g>
  </svg>
);
