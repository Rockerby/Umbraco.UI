import { UUIEvent } from '@umbraco-ui/uui-base/lib/events';
import { UUIComboboxListElement } from './uui-combobox-list.element';

export class UUIComboboxListEvent extends UUIEvent<UUIComboboxListElement> {
  public static readonly CHANGE: string = 'change';

  constructor(evName: string, eventInit: any | null = {}) {
    super(evName, {
      ...{ bubbles: true },
      ...eventInit,
    });
  }
}
