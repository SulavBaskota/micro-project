import { addOrder, removeOrder, increment, decrement } from "./orderSlice";

function createPayLoad(itemId, itemPrice, itemName) {
  if (typeof itemName !== "undefined") {
    return {
      itemId: itemId,
      itemName: itemName,
      itemPrice: itemPrice,
    };
  } else {
    return {
      itemId: itemId,
      itemPrice: itemPrice,
    };
  }
}

export function isOrderInList(itemId, orderList) {
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].itemId === itemId) {
      return true;
    }
  }
  return false;
}

export function indexOf(itemId, orderList) {
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].itemId === itemId) {
      return i;
    }
  }
  return -1;
}

export function handleRemoveItem(itemId, itemPrice, orderList, dispatch) {
  let payload = createPayLoad(itemId, itemPrice);

  if (isOrderInList(itemId, orderList)) {
    if (orderList[indexOf(itemId, orderList)].quantity > 1) {
      dispatch(decrement(payload));
    } else {
      dispatch(removeOrder(payload));
    }
  }
}

export function handleAddItem(
  itemId,
  itemName,
  itemPrice,
  orderList,
  dispatch
) {
  let payload = createPayLoad(itemId, itemPrice, itemName);

  if (isOrderInList(itemId, orderList)) {
    dispatch(increment(payload));
  } else {
    dispatch(addOrder(payload));
  }
}
