import { Metadata} from 'next';
import { Card } from './card/card';

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial"
};
export default function PageHome() {
  return (
    
      <main>
        <Card />
      </main>

      
  );
}
