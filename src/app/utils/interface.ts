export interface NavbarProps {
  id: number,
  label: string,
  link: string
}

export interface Icons {
  size: number;
  color: string;
}

export interface HomeSectionProps {
  id: number;
}

export interface ArtProps {
  name: string,
  link: string
}

export interface FeaturedOperatorProps {
  id: string,
  name: string,
  biography: string,
  description: string,
  affiliation: string[],
  background: string,
  art: ArtProps[],
  cardImage:string
}

export interface WorldContentProps {
  id: number;
  name: string,
  description: string,
  image: string
}

export interface DownloadLinksProps {
  id: number,
  link: string,
  image: string
}

export interface AffiliationsArrayProps {
  faction: string;
  params: string;
  image: string
}

export interface OperatorClassesProps {
  name: string;
  image: string;
}

export interface ElitesProps {
  name: string;
  image: string;
  imageBlue: string;
}

export interface PotensialsProps {
  name: string;
  image: string;
}

export interface MediaContentProps {
  id: number;
  name: string;
  image: string;
}