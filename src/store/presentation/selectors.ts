import { RootState } from '../types';
import { PresentationState } from './reducer';
import { Presentation } from './model';
import { isEmpty } from 'lodash';

export const selectPresentationDomain = (state: RootState): PresentationState =>
  state.presentationState;

export const selectCurrentPresentation = (state: RootState): Presentation =>
  selectPresentationDomain(state).currentPresentation;

export const selectCurrentPresentationId = (state: RootState): string =>
  selectCurrentPresentation(state)?.id;

export const selectCurrentPresentationUrl = (state: RootState): string =>
  selectCurrentPresentation(state)?.fileUrl;

export const selectCurrentSlideNumber = (state: RootState): number =>
  selectCurrentPresentation(state)?.currentSlide;

export const selectCurrentPresentationMaxSlides = (state: RootState): number =>
  selectCurrentPresentation(state)?.numberOfSlides;

export const selectIsCurrentPresentationLoading = (
  state: RootState,
): boolean => {
  const currentPresentation = selectCurrentPresentation(state);
  return isEmpty(currentPresentation);
};
