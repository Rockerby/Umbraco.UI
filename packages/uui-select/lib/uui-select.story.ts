import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-select/lib/index';

const options: Array<Option> = [
  { name: 'Carrot', value: 'orange' },
  { name: 'Cucumber', value: 'green' },
  { name: 'Aubergine', value: 'purple' },
  { name: 'Blueberry', value: 'Blue' },
  { name: 'Banana', value: 'yellow' },
  { name: 'Strawberry', value: 'red' },
];

const preselectedOptions: Array<Option> = options.map(option => {
  if (option.name === 'Aubergine') return { ...option, selected: true };
  return option;
});

const groupedOptions: Array<Option> = options.map(option => {
  if (options.indexOf(option) <= 2) return { ...option, group: 'Vegetables' };
  return { ...option, group: 'Fruits' };
});

export default {
  id: 'uui-select',
  title: 'Inputs/Select',
  component: 'uui-select',
  args: {
    label: 'Favorite green',
    placeholder: 'Select an option',
    disabled: false,
    name: 'Favorite Green',
    value: '',
  },
  parameters: {
    docs: {
      source: {
        code: `      
<uui-select placeholder="Select an option"></uui-select>

//this is an example of array you need to pass to the select component to print the options
const options: Array<Option> = [
  { name: 'Carrot', value: 'orange' },
  { name: 'Cucumber', value: 'green' },
  { name: 'Aubergine', value: 'purple' },
  { name: 'Blueberry', value: 'Blue' },
  { name: 'Banana', value: 'yellow' },
  { name: 'Strawberry', value: 'red' },
];

`,
      },
    },
  },
};

export const AAAOverview: Story = props =>
  html`<uui-select
    .options=${options}
    .placeholder=${props.placeholder}
    .disabled=${props.disabled}
    .label=${props.label}></uui-select>`;
AAAOverview.storyName = 'Overview';

export const Preselected: Story = () =>
  html`<uui-select
    .options=${preselectedOptions}
    label="Preselected"></uui-select>`;
Preselected.parameters = {
  docs: {
    source: {
      code: `      
<uui-select placeholder="Select an option"></uui-select>

//this is an example of array you need to pass to the select component to print the options
const options: Array<Option> = [
{ name: 'Carrot', value: 'orange' },
{ name: 'Cucumber', value: 'green' },
{ name: 'Aubergine', value: 'purple', selected: true },
{ name: 'Blueberry', value: 'Blue' },
{ name: 'Banana', value: 'yellow' },
{ name: 'Strawberry', value: 'red' },
];

`,
    },
  },
};

export const Groups: Story = props =>
  html`<uui-select
    .options=${groupedOptions}
    label="Grouped"
    .placeholder=${props.placeholder}></uui-select>`;

Groups.parameters = {
  controls: { include: ['placeholder'] },
  docs: {
    source: {
      code: `      
<uui-select placeholder="Select an option"></uui-select>

//this is an example of array you need to pass to the select component to print the options
const options: Array<Option> = [
{ name: 'Carrot', value: 'orange', group: 'Vegetables' },
{ name: 'Cucumber', value: 'green', group: 'Vegetables' },
{ name: 'Aubergine', value: 'purple',, group: 'Vegetables' },
{ name: 'Blueberry', value: 'Blue', group: 'Fruits' },
{ name: 'Banana', value: 'yellow', group: 'Fruits' },
{ name: 'Strawberry', value: 'red', group: 'Fruits' },
];

`,
    },
  },
};

export const DisabledGroups: Story = props =>
  html`<uui-select
    .options=${groupedOptions}
    label="Disabled Group"
    disabledGroups="vegetables"
    .placeholder=${props.placeholder}></uui-select>`;
DisabledGroups.parameters = {
  controls: { include: ['placeholder'] },
  docs: {
    source: {
      code: `      
<uui-select disabledGroups="vegetables"></uui-select>`,
    },
  },
};