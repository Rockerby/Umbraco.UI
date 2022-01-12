import { html, css } from 'lit';
import {
  InputType,
  UUIInputElement,
} from '@umbraco-ui/uui-input/lib/uui-input.element';
import { property, state } from 'lit/decorators.js';

/**
 * @element uui-input-password
 */
export class UUIInputPasswordElement extends UUIInputElement {
  static styles = [
    ...UUIInputElement.styles,
    css`
      :host {
        /* Styles goes here */
      }
      /* #phone {
        height: 100%;
        padding: 0 6px;
        border-right: 1px solid
          var(--uui-input-border-color, var(--uui-interface-border));
        background: #ececec;
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
      } */

      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `,
  ];

  @state()
  private passwordType: InputType = 'password';

  @property()
  get type() {
    return this.passwordType;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set type(_newValue) {}

  onPasswordToggle() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  getIconName() {
    return this.passwordType === 'password' ? 'bug' : 'check';
  }

  renderIcon() {
    return this.passwordType === 'password'
      ? html`<uui-icon name="check"></uui-icon>`
      : html`<uui-icon name="bug"></uui-icon>`;
  }

  // renderPrepend() {
  //   return html`<div id="phone">+45</div>`;
  // }

  renderAppend() {
    return html`<uui-button
      .disabled=${this.disabled}
      @click=${this.onPasswordToggle}
      style="--uui-button-padding-top-factor: 0; --uui-button-padding-bottom-factor: 0"
      compact
      id="eye">
      ${this.renderIcon()}
    </uui-button>`;
  }
}
