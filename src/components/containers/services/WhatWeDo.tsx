import style from '@/styles/services.module.scss';
import Section from '../Section';
import type { WhatWeDoData } from '@/types/components';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok: SbBlokData & WhatWeDoData
};

export default function WhatWeDo(props: Props) {
  return (
    <Section containerClassName={style.servicesWrapper}>
      <span className={style.servicesTitle}>{props.blok.title}</span>
      <span className={style.servicesTitle}>{props.blok.section}</span>
      <p className={style.servicesParagraph}>{props.blok.paragraph}</p>
      {/* <div className={style.servicesGrid}>
        {map(props.blok.services, (group) => (
          <div key={group.label} className={style.servicesColumn}>
            <span className={style.servicesColumnLabel}>{group.label}</span>
            {map(group.list, (item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div> */}
    </Section>
  );
}
