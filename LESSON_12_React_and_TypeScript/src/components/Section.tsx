import { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  title = 'Section component',
  children,
}: SectionProps) => {
  return (
    <section>
      <h3>{title}</h3>
      <span>{children}</span>
    </section>
  );
};
