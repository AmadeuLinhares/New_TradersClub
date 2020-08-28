import { uuid } from 'uuidv4';

export interface ProdutosDisponiveis {
  nome: string;
  medida: string;
  quantidade: number;
  id: string;
}
export interface ProdutosSelecionados {
  nome: string;
  infoAdicional?: string;
  medida: string;
  quantidade: number;
  id: string;
}

interface FormatoObjeto {
  entrega: string;
  carrinhoAtual: ProdutosSelecionados[];
  produtosDiponiveis: ProdutosDisponiveis[];
}

export const DadosMock: FormatoObjeto = {
  carrinhoAtual: [
    {
      infoAdicional: 'Vende Crua',
      medida: 'Kg',
      nome: 'Banana da terra',
      quantidade: 3,
      id: uuid(),
    },
    {
      infoAdicional: 'integral 1L Nestlê',
      medida: 'Un',
      nome: 'Creme de leite',
      quantidade: 10,
      id: uuid(),
    },
    {
      infoAdicional: 'Apenas fornecedores padrão A+ com prazo',
      medida: 'Un',
      nome: 'Coentro maço',
      quantidade: 1,
      id: uuid(),
    },
    {
      infoAdicional: 'Cortar em bifes',
      medida: 'Kg',
      nome: 'File Mignon (peça)',
      quantidade: 8,
      id: uuid(),
    },
  ],
  produtosDiponiveis: [
    {
      medida: 'UnUn',
      nome: 'Coca-cola PET 2L',
      quantidade: 0,
      id: uuid(),
    },
    {
      medida: 'Un',
      nome: 'Banana Prata',
      quantidade: 0,
      id: uuid(),
    },
    {
      medida: 'Un',
      nome: 'Coentro Maço',
      quantidade: 0,
      id: uuid(),
    },
    {
      medida: 'Un',
      nome: 'Cachaça Yaguara 1L',
      quantidade: 0,
      id: uuid(),
    },
  ],
  entrega: '5a feira 10-12h',
};
