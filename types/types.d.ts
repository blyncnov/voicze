export interface NavBarType {
  id: number;
  title: string;
  url: string;
}

export interface FeaturedHostel {
  id: Number;
  image: string | any;
  name: string;
  price: string;
  location: string;
  no_available: string;
}

export interface refType {
  id: number;
  title: string;
  icon: React.JSX.Element;
}

export interface refLevelType {
  id: number;
  title: string;
}

export default FeaturedHostel;
