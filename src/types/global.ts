export type SectionProps = {
  onNext: (id?: any) => void;
  onPrev: (id?: string) => void;
  currentStep?: number;
  setLoadingData?: any;
};
