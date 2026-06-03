export interface HistoricalDestination {
  id: string;
  name: string;
  era: string;
  price: string;
  image: string;
  botDescription: string;
}

export const DESTINATIONS_CATALOG: Record<string, HistoricalDestination> = {
  "Paris 1889": {
    id: "paris",
    name: "Paris 1889",
    era: "La Belle Époque",
    price: "15 000 $TC",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Paris 1889 (La Belle Époque) est configurée. Votre billet inclut un accès VIP à l'inauguration de la Tour Eiffel et une loge privée au Moulin Rouge."
  },
  "Florence 1504": {
    id: "florence",
    name: "Florence 1504",
    era: "La Haute Renaissance",
    price: "18 000 $TC",
    image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Florence 1504 est prête. Vous disposerez d'une accréditation exclusive pour observer Léonard de Vinci peindre la Joconde et visiter les chantiers de Michel-Ange."
  },
  "Crétacé": {
    id: "cretace",
    name: "Crétacé",
    era: "Mésopotamie Sauvage (-65M d'années)",
    price: "25 000 $TC",
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Alerte : Le Crétacé est une destination de Classe 4. Équipement de camouflage thermique et dôme de confinement quantique obligatoires pour observer la faune reptilienne géante."
  },
  "Égypte Antique": {
    id: "egypte",
    name: "Égypte Antique",
    era: "Règne de Ramsès II (-1250)",
    price: "22 000 $TC",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Le couloir vers Thèbes (-1250) est stable. Vous assisterez à la construction des temples d'Abou Simbel en tant qu'invité d'honneur de la cour royale."
  },
  "Kyoto 1603": {
    id: "kyoto",
    name: "Kyoto 1603",
    era: "Début de l'Ère Edo",
    price: "19 500 $TC",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Kyoto 1603 est initialisé. Plongez au cœur de l'avènement des Shoguns, visitez les pavillons de thé traditionnels et suivez la voie des samouraïs de l'élite."
  },
  "Athènes antique": {
    id: "athenes",
    name: "Athènes antique",
    era: "Siècle de Périclès (-440)",
    price: "21 000 $TC",
    image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Athènes (-440) est synchronisée. Vous pourrez écouter les débats philosophiques de Socrate sur l'Agora et assister aux premiers banquets démocratiques."
  },
  "New York 1925": {
    id: "newyork",
    name: "New York 1925",
    era: "Les Années Folles",
    price: "14 000 $TC",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    botDescription: "New York 1925 est accessible. Préparez vos tenues de soirée : immersion totale dans l'âge d'or du Jazz, les clubs clandestins (speakeasies) et la folie des premiers gratte-ciels."
  },
  "Atlantide": {
    id: "atlantide",
    name: "Atlantide",
    era: "Époque Pré-Déluge (Mythe)",
    price: "40 000 $TC",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Destination Premium secrète. L'Atlantide technologique avant sa submersion. Attention, l'environnement hautement énergétique nécessite un blindage psychique de niveau supérieur."
  },
  "Londres 1888": {
    id: "londres",
    name: "Londres 1888",
    era: "Époque Victorienne",
    price: "16 000 $TC",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=1200&q=80",
    botDescription: "Londres 1888 brumeuse est en ligne. Enquêtez au cœur de Whitechapel ou arpentez les premiers laboratoires industriels de l'Empire britannique sous la fumée du charbon."
  }
};