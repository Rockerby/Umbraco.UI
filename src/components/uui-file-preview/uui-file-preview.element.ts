import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators';
import { UUIFileSize } from './UUIFileSize';

/**
 *  @element uui-file-preview
 */

//todo auto upload
export class UUIFilePreviewElement extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        font-size: 12px;
        text-align: center;
      }
    `,
  ];

  @property({ attribute: false })
  source = '';

  @property({ attribute: false })
  sourceFileExt = '';

  @property({ attribute: false })
  name = '';

  @property({ attribute: false })
  type = '';

  @state({})
  isDirectory = false;

  private _file: File | null = null;
  @property({ attribute: false })
  get file() {
    return this._file;
  }

  set file(newValue) {
    const oldValue = this._file;
    this._file = newValue;
    if (newValue) {
      this._readFile(newValue);
      this.name = newValue.name;
    }

    this.requestUpdate('file', oldValue);
  }

  private _readFile(file: File) {
    this.type = file.type;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        this.source = reader.result as string;
        this.sourceFileExt = this.source.slice(
          this.source.indexOf('/') + 1,
          this.source.indexOf(';')
        );
      }
      if (reader.error && reader.error.name === 'NotFoundError')
        this.isDirectory = true;
    };
  }

  fileTypeTemplate(type: string) {
    if (type.startsWith('image'))
      return html`<uui-image-file-symbol
        .type=${this.sourceFileExt}
        .source=${this.source}
      ></uui-image-file-symbol>`;

    if (this.isDirectory) return html`<uui-folder-symbol></uui-folder-symbol>`;

    return html`<uui-file-symbol
      .type=${this.sourceFileExt}
    ></uui-file-symbol>`;
  }

  render() {
    return html`
      ${this.fileTypeTemplate(this.type)}
      <span id="file-name">
        ${this.name}
        ${this.file?.size && !this.isDirectory
          ? html`<br />
              ${UUIFileSize.humanFileSize(this.file?.size, true)}`
          : ''}
      </span>
    `;
  }
}