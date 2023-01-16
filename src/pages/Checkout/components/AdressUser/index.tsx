import { HeaderWrapper, Input, Input2, Input3, Input4, Input5 } from './styles';
import { MapPinLine } from 'phosphor-react';
import { useForm } from 'react-hook-form';

export function AdressUser() {
 
  const { register } = useForm();

  return (
    <div className="teste">

      <HeaderWrapper>
        <MapPinLine size={22} />
        <div>
          <h3 className="subtitle">Endereço de Entrega</h3>
          <p className="description">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </HeaderWrapper>

      <Input2
        required
        placeholder="CEP"
        {...register('cep')}
      />
      <Input
        required
        placeholder="Rua"
        {...register('rua')}
      />
      <Input2
        required
        placeholder="Número"
        {...register('numero')}
      />
      <Input3
        placeholder="Complemento / Opcional"
        {...register('complemento')}
      />
      <Input2
        required
        placeholder="Bairro"
        {...register('bairro')}
      />
      <Input4
        required
        placeholder="Cidade"
        {...register('cidade')}
      />
      <Input5
        required
        placeholder="UF"
        {...register('uf')}
      />
    </div>
  );
};