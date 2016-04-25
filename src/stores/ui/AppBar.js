import { observable } from 'mobx';
import { action } from '~/src/state/actions';

export default class UIStore {

  @observable accountMenuIsOpen = false;

  constructor(data) {
    Object.assign(this, data);
  }

  @action
  toggleAccountMenu(flag = null) {
    if (flag === 'open') this.accountMenuIsOpen = true;
    if (flag === 'close') this.accountMenuIsOpen = false;
    if (!flag) this.accountMenuIsOpen = !this.accountMenuIsOpen;
  }
}