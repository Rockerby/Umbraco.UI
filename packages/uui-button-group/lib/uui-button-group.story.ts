import '.';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Buttons/Button Group',
  component: 'uui-button-group',
  id: 'uui-button-group',
  args: {
    look: 'secondary',
    color: 'primary',
  },
  argTypes: {
    look: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'outline', 'placeholder'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'positive', 'warning', 'danger'],
    },
  },
};

const looks = ['default', 'primary', 'secondary', 'outline', 'placeholder'];
const colors = ['default', 'positive', 'warning', 'danger'];

export const AAAOverview: Story = props => html`
  <uui-button-group>
    <uui-button
      look="${props.look}"
      color="${props.color}"
      label="Button 1"></uui-button>
    <uui-button
      look="${props.look}"
      color="${props.color}"
      label="Button 2"></uui-button>
    <uui-button
      look="${props.look}"
      color="${props.color}"
      label="Button 3"></uui-button>
    <uui-button
      look="${props.look}"
      color="${props.color}"
      label="Button 4"></uui-button>
  </uui-button-group>
`;

AAAOverview.storyName = 'Overview';

export const MixedLooksAndColors = () => html`
  ${colors.map(
    color => html`
      <div style="margin-bottom: 32px">
        <h4>${color}</h4>
        <uui-button-group>
          ${looks.map(
            look => html`<uui-button color=${color as any} look=${look as any}>
              ${look}
            </uui-button>`
          )}
        </uui-button-group>
      </div>
    `
  )}
`;

MixedLooksAndColors.parameters = {
  controls: { disable: true },
  docs: {
    source: {
      code: `
<uui-button-group>
  <uui-button look="[look]" color="[color]>Button 1</uui-button>
  <uui-button look="[look]" color="[color]>Button 2</uui-button>
  <uui-button look="[look]" color="[color]>Button 3</uui-button>
  <uui-button look="[look]" color="[color]>Button 4</uui-button>
</uui-button-group>`,
    },
  },
};

export const LooksAndColors = () => html`
  ${colors.map(
    color => html`
      <div style="margin-bottom: 32px; display: block">
        <h4>${color}</h4>
        ${looks.map(
          look => html`
            <uui-button-group style="margin-bottom: 16px;">
              <uui-button
                label="Button 1"
                color=${color as any}
                look=${look as any}></uui-button>
              <uui-button
                label="Button 2"
                color=${color as any}
                look=${look as any}></uui-button>
              <uui-button
                label="Button 3"
                color=${color as any}
                look=${look as any}></uui-button>
              <uui-button
                label="Button 4"
                color=${color as any}
                look=${look as any}></uui-button> </uui-button-group
            ><br />
          `
        )}
      </div>
    `
  )}
`;

// //* DO NOT DELETE START! they will work when dropdown component will come to this branch
export const WithDropdown = () => {
  const handleClick = (e: MouseEvent) => {
    //@ts-ignore
    e.target.parentNode.open = !e.target.parentNode.open;
  };

  return html`
    <uui-button-group>
      <uui-popover placement="bottom-start" id="settings-popover" margin="14">
        <uui-button
          slot="trigger"
          look="outline"
          label="Open dropdown"
          id="myPopoverBtn"
          @click=${handleClick}>
          Open dropdown 1
        </uui-button>
        <div slot="popover">My Content appearing inside popover box.</div>
      </uui-popover>
      <uui-button label="Button 1" look="outline"></uui-button>
      <uui-button label="Button 2" look="outline"></uui-button>
      <uui-popover placement="bottom-start" id="settings-popover" margin="14">
        <uui-button
          slot="trigger"
          look="outline"
          label="Open dropdown"
          id="myPopoverBtn"
          @click=${handleClick}>
          Open dropdown 2
        </uui-button>
        <div slot="popover">My Content appearing inside popover box.</div>
      </uui-popover>
      <uui-button label="Button 4" look="outline"></uui-button>
      <uui-popover placement="bottom-start" id="settings-popover" margin="14">
        <uui-button
          slot="trigger"
          look="outline"
          label="Open dropdown"
          id="myPopoverBtn"
          @click=${handleClick}>
          Open dropdown 3
        </uui-button>
        <div slot="popover">My Content appearing inside popover box.</div>
      </uui-popover>
    </uui-button-group>
  `;
};
