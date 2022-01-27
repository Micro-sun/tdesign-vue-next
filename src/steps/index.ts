import _Steps from './steps';
import _StepItem from './step-item';
import mapProps from '../utils/map-props';
import withInstall from '../utils/withInstall';
import { TdStepsProps, TdStepItemProps } from './type';

import './style';

export * from './type';
export type StepsProps = TdStepsProps;
export type StepItemProps = TdStepItemProps;

export const Steps = withInstall(
  mapProps([
    {
      name: 'current',
      event: 'change',
      alias: ['modelValue'],
    },
  ])(_Steps),
);
export const StepItem = withInstall(_StepItem);
export default Steps;
