import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { map } from 'lodash';
import CtaLink from '@/components/elements/CtaLink';
import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import SeeMore from '@/components/elements/SeeMore';
import useScrollAnimations, { AnimationType } from '@/hooks/useScrollAnimations';
import useTranslations from '@/hooks/useTranslations';
import style from '@/styles/projects/selected.module.scss';
import { routes } from '@/utils';
import Section from '../Section';
import type { CursorPosition } from '@/components/elements/SeeMore';
import type { SelectedData } from '@/types/projects';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok: SbBlokData & SelectedData
};

export default function Selected(props: Props) {
  const { t } = useTranslations();
  const [modalShow, setModalShow] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>(null);

  useScrollAnimations({
    selectedWrapper: {
      animation: AnimationType.fadeDown,
      query: '.selected-animation-wrapper',
      offset: 100,
    },
  });

  useEffect(() => {
    const handleMove = ({ x, y }: MouseEvent) => {
      setCursorPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  const handleShowModal = (shouldShow: boolean) => {
    setModalShow(shouldShow);
  };

  return (
    <Section containerClassName={style.selectedWrapper}>
      <div className={classNames('selected-animation-wrapper', style.selectedTextWrapper)}>
        <span className={style.selectedTitle}>
          {props.blok.section}
        </span>
        <div className={style.selectedColumn}>
          <span className={style.selectedTitle}>
            {props.blok.title}
          </span>
          <CtaLink className={style.selectedCTA} href={props.blok.cta[0].link.url}>
            {props.blok.cta[0].text}
          </CtaLink>
        </div>
      </div>
      <SeeMore cursorPosition={cursorPosition} show={modalShow} />
      <div className={style.projectsWrapper}>
        {map(props.blok.projects, (project) => {
          const projectOverview = project.content.overview[0];

          return (
            <Link
              key={project.slug}
              className={style.projectContainer}
              href={routes.project(project.slug)}
            >
              <Image
                className={style.projectCover}
                src={projectOverview.cover.filename}
                alt={projectOverview.cover.alt}
                onMouseEnter={() => handleShowModal(true)}
                onMouseLeave={() => handleShowModal(false)}
              />
              <span className={style.projectTitle}>{projectOverview.title}</span>
            </Link>
          );
        })}
        <CtaLink className={style.selectedMobileCTA} href={routes.work}>
          {t('globals.see_all_projects')}
        </CtaLink>
      </div>
    </Section>
  );
}
