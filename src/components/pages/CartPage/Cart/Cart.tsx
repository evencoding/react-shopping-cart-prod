import { Link } from 'react-router-dom';
import * as styled from './Cart.styled';

import { useCartSize } from '@recoils/cartAtoms';

import { CartActions } from '../CartActions/CartActions';
import { CartItemList } from '../CartItemList/CartItemList';

import { PATH } from '@constants/index';

export const Cart = () => {
  const cartSize = useCartSize();

  return (
    <styled.Cart>
      <styled.CartHeader>
        <CartActions />
        <span>든든배송 상품 ({cartSize}개)</span>
      </styled.CartHeader>
      {cartSize > 0 ? (
        <CartItemList />
      ) : (
        <styled.NoExistItemsMessage>
          <p>장바구니에 등록된 상품이 존재하지 않아요🥲</p>
          <Link to={PATH.HOME}>상품 보러가기🚀</Link>
        </styled.NoExistItemsMessage>
      )}
    </styled.Cart>
  );
};
