interface ErrorPageProps {
    error: Error;
    reset: () => void;
  }
  
  type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    handlec?: string;
    gql_id: string;
  };
  type products= {
    id: number;
    gql_id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    quantity: number;
    handle: string;
    handlec: string;
    tags: string;
}
type collection= {
  id: number;
  title: string;
  handle: string;
}
  type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image?: string;
    merchandiseId?: string;
  }
  