import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * reference to the button element
   */
  @Prop() button: HTMLElement;
  /**
   * Wether the button is disabled or not
   */
  @Prop() disabled: boolean = false;

  /**
   * The type of button (corresponds to type property of native html button)
   */
  @Prop() type: 'confirm' | 'submit' | 'button' = 'button';

  /**
   * The size of the button
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * color theme to be applied to the button e.g primary
   */
  @Prop() variation: 'default' | 'primary' | 'destructive' | 'warning' = 'primary';

  @Prop() btnType: 'solid' | 'outline' | 'ghost' = 'solid';

  /**
   * Whether or not the button should fill the height of its parent
   */
  @Prop() fullHeight: boolean = false;

  /**
   * give the button square borders
   */
  @Prop() noBorderRadius: boolean = false;

  /**
   * Whether or not the button should fill the width of its parent
   */
  @Prop() fullWidth: boolean = false;

  /**
   * Alignment of button content
   */
  @Prop() alignment: 'left' | 'right' | 'center';

  /** this property holds class data for specific button types that are in fact just
   * slight modifications of other types note that the array should ALWAYS contain
   * the base class from which the modification is derived
   */
  private typeClasses = {
    'white-border': ['btn--white-border', 'btn--solid'],
  };
  /** helper method for applying modification classes to the DOM */
  private getClasses(type) {
    if (this.typeClasses[type]) {
      return this.typeClasses[type].join(' ');
    }
    return `btn--${type}`;
  }

  render() {
    const alignCenter = !this.alignment && 'justify-content-center';

    return (
      <Host>
        <button
          ref={ref => (this.button = ref)}
          disabled={!!this.disabled}
          class={`
            btn
            btn--${this.variation}
            ${this.getClasses(this.btnType)}
            ${this.noBorderRadius && `btn--no-border-radius`}
            ${this.size && `btn--${this.size}`}
            ${this.fullHeight && 'btn--full-height'}
            ${this.fullWidth && `btn--full-width ${alignCenter}`}
          `}
          type={this.type}
          aria-disabled={`${this.disabled}`}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
