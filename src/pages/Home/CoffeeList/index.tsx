import ExpressoAmericano from '@/assets/images/americano.png';
import ExpressoGelado from '@/assets/images/cafe-gelado.png';
import ExpressoCremoso from '@/assets/images/expresso-cremoso.png';
import Expresso from '@/assets/images/expresso.png';
import CafeComLeite from '@/assets/images/cafe-com-leite.png';
import { CoffeeCard } from '@/components/CoffeeCard';
import { CoffeeListContainer } from './styles';

export const CoffeeList = () => {
  return (
    <>
      <h1>Nossos Cafés</h1>
      <CoffeeListContainer>
        <CoffeeCard
          id="1"
          image={Expresso}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9,90"
        />
        <CoffeeCard
          id="2"
          image={ExpressoAmericano}
          title="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price="9,90"
        />
        <CoffeeCard
          id="3"
          image={ExpressoCremoso}
          title="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          price="9,90"
        />
        <CoffeeCard
          id="4"
          image={ExpressoGelado}
          title="Expresso Gelado"
          description="Bebida preparada com café expresso e cubos de gelo"
          price="9,90"
        />
        <CoffeeCard
          id="5"
          image={CafeComLeite}
          title="Café com Leite"
          description="Meio a meio de expresso tradicional com leite vaporizado"
          price="9,90"
        />
      </CoffeeListContainer>
    </>
  );
};
