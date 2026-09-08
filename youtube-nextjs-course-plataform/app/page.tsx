import { Metadata} from 'next';
import { Card } from './card/card';
import { Section } from './section/Section';

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial"
};
export default function PageHome() {
  return (
    
      <main>
        <Section />
      </main>

      
  );
}
