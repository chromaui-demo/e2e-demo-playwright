import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-3309&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} as ComponentMeta<typeof MultiStepForm>

const Template: ComponentStory<typeof MultiStepForm> = () => <MultiStepForm />

export const Default = Template.bind({})
