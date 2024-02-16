import expressoGelado from '../assets/coffees/CoffeeExpressoGelado.svg'
import americano from '../assets/coffees/CoffeeExpressoAmericano.svg'
import chocolateQuente from '../assets/coffees/ChocolateQuente.svg'
import cremoso from '../assets/coffees/CoffeeExpressoCremoso.svg'
import mocaccino from '../assets/coffees/Mocaccino.svg'
import capuccino from '../assets/coffees/Capuccino.svg'
import macchiato from '../assets/coffees/Macchiato.svg'
import tradicional from '../assets/coffees/coffee.svg'
import leite from '../assets/coffees/CafecomLeite.svg'
import havaiano from '../assets/coffees/Havaiano.svg'
import irlandes from '../assets/coffees/Irlandes.svg'
import cubano from '../assets/coffees/Cubano.svg'
import arabe from '../assets/coffees/Arabe.svg'
import latte from '../assets/coffees/Latte.svg'

export const CoffeeList = [
  {
    id: 1,
    name: 'expresso tradicional',
    types: ['tradicional'],
    description: 'o tradicional café feito com água quente e grãos moídos',
    img: tradicional,
    value: 6.99,
    quantity: 0
  },
  {
    id: 2,
    name: 'expresso americano',
    types: ['tradicional'],
    description: 'expresso diluído, menos intenso que o tradicional',
    img: americano,
    value: 6.99,
    quantity: 0
  },
  {
    id: 3,
    name: 'expresso cremoso',
    types: ['tradicional'],
    description: 'café expresso tradicional com espuma cremosa',
    img: cremoso,
    value: 7.99,
    quantity: 0
  },
  {
    id: 4,
    name: 'expresso gelado',
    types: ['tradicional', 'gelado'],
    description: 'bebida preparada com café expresso e cubos de gelo',
    img: expressoGelado,
    value: 7.99,
    quantity: 0
  },
  {
    id: 5,
    name: 'café com Leite',
    types: ['tradicional', 'com leite'],
    description: 'meio a meio de expresso tradicional com leite vaporizado',
    img: leite,
    value: 7.99,
    quantity: 0
  },
  {
    id: 6,
    name: 'latte',
    types: ['tradicional', 'com leite'],
    description:
      'uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: latte,
    value: 8.99,
    quantity: 0
  },
  {
    id: 7,
    name: 'capuccino',
    types: ['tradicional', 'com leite'],
    description:
      'bebida com canela feita de doses iguais de café, leite e espuma',
    img: capuccino,
    value: 9.99,
    quantity: 0
  },
  {
    id: 8,
    name: 'macchiato',
    types: ['tradicional', 'com leite'],
    description:
      'café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
    value: 9.99,
    quantity: 0
  },
  {
    id: 9,
    name: 'mocaccino',
    types: ['tradicional', 'com leite'],
    description: 'café expresso com calda de chocolate, pouco leite e espuma',
    img: mocaccino,
    value: 11.99,
    quantity: 0
  },
  {
    id: 10,
    name: 'chocolate Quente',
    types: ['tradicional', 'com leite'],
    description: 'bebida feita com chocolate dissolvido no leite quente e café',
    img: chocolateQuente,
    value: 10.99,
    quantity: 0
  },
  {
    id: 11,
    name: 'cubano',
    types: ['tradicional', 'alcoólico', 'gelado'],
    description:
      'drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
    value: 15.99,
    quantity: 0
  },
  {
    id: 12,
    name: 'havaiano',
    types: ['especial'],
    description: 'bebida adocicada preparada com café e leite de coco',
    img: havaiano,
    value: 11.99,
    quantity: 0
  },
  {
    id: 13,
    name: 'árabe',
    types: ['especial'],
    description: 'bebida preparada com grãos de café árabe e especiarias',
    img: arabe,
    value: 13.99,
    quantity: 0
  },
  {
    id: 14,
    name: 'irlandês',
    types: ['especial', 'alcoólico'],
    description: 'bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
    value: 16.99,
    quantity: 0
  }
]
