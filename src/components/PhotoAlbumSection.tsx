import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import albumPhoto01 from '../assets/album/friends-01.jpg';
import albumPhoto02 from '../assets/album/friends-02.jpg';
import albumPhoto03 from '../assets/album/friends-03.jpg';
import albumPhoto04 from '../assets/album/friends-04.jpg';
import albumPhoto05 from '../assets/album/friends-05.jpg';
import albumPhoto06 from '../assets/album/friends-06.jpg';
import albumPhoto07 from '../assets/album/friends-07.jpg';
import albumPhoto08 from '../assets/album/friends-08.jpg';
import albumVideo01 from '../assets/album/friends-video-01.mp4';
import albumVideo02 from '../assets/album/friends-video-02.mp4';
import albumVideo03 from '../assets/album/friends-video-03.mp4';
import albumVideo04 from '../assets/album/friends-video-04.mp4';
import albumVideo05 from '../assets/album/friends-video-05.mp4';
import { useReveal } from '../hooks/useReveal';

type AlbumItem = {
  type: 'image' | 'video';
  src: string;
  title: string;
  caption: string;
  className?: string;
};

const albumItems: AlbumItem[] = [
  {
    type: 'image',
    src: albumPhoto01,
    title: 'Доказательство 01',
    caption: 'счастливый снимок',
    className: 'is-featured',
  },
  { type: 'image', src: albumPhoto02, title: 'Доказательство 02', caption: 'подружечный data point' },
  { type: 'video', src: albumVideo04, title: 'Живой кадр 03', caption: 'motion evidence', className: 'is-tall' },
  { type: 'image', src: albumPhoto03, title: 'Доказательство 04', caption: 'золотой момент' },
  { type: 'image', src: albumPhoto06, title: 'Доказательство 08', caption: 'ещё один повод улыбнуться' },
  { type: 'image', src: albumPhoto05, title: 'Доказательство 06', caption: 'архив красоты' },
  { type: 'video', src: albumVideo02, title: 'Живой кадр 07', caption: 'маленький фильм' },
  { type: 'image', src: albumPhoto04, title: 'Доказательство 05', caption: 'красивое сохранено' },
  { type: 'video', src: albumVideo03, title: 'Живой кадр 09', caption: 'ещё один маленький фильм', className: 'is-tall' },
  { type: 'video', src: albumVideo01, title: 'Живой кадр 10', caption: 'короткое доказательство', className: 'is-tall' },
  { type: 'image', src: albumPhoto07, title: 'Доказательство 11', caption: 'тёплый кадр' },
  { type: 'image', src: albumPhoto08, title: 'Доказательство 12', caption: 'общий момент', className: 'is-tall' },
  { type: 'video', src: albumVideo05, title: 'Живой кадр 13', caption: 'вертикальный момент' },
];

function PhotoAlbumSection() {
  const revealRef = useReveal<HTMLElement>();
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isModalMediaLoading, setIsModalMediaLoading] = useState(false);
  const modalItem = modalIndex === null ? null : albumItems[modalIndex];

  const showPrevious = () => {
    setModalIndex((index) => (index === null ? null : (index - 1 + albumItems.length) % albumItems.length));
  };

  const showNext = () => {
    setModalIndex((index) => (index === null ? null : (index + 1) % albumItems.length));
  };

  useEffect(() => {
    if (modalIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalIndex]);

  useEffect(() => {
    setIsModalMediaLoading(modalIndex !== null);
  }, [modalIndex]);

  return (
    <section className="section reveal photo-album" id="album" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Friendship archive</p>
        <h2>Наш маленький датасет</h2>
        <p>Небольшая коллекция тёплых и очень ценных общих моментов.</p>
      </div>

      <div className="photo-album__grid">
        {albumItems.map((item, index) => (
          <button
            aria-label={`Открыть ${item.title}`}
            className={['album-card', item.className].filter(Boolean).join(' ')}
            key={item.title}
            onClick={() => setModalIndex(index)}
            type="button"
          >
            {item.type === 'video' ? (
              <video autoPlay loop muted playsInline src={item.src} />
            ) : (
              <img alt={item.title} src={item.src} />
            )}
            <span className="album-card__shine" />
            {item.type === 'video' && <span className="album-card__play">play</span>}
          </button>
        ))}
      </div>

      {modalItem && modalIndex !== null && createPortal(
        <div className="modal" role="dialog" aria-modal="true" aria-label={modalItem.title}>
          <button className="modal__backdrop" type="button" aria-label="Закрыть" onClick={() => setModalIndex(null)} />
          <div
            className="modal__card album-modal"
            onClick={(event) => {
              if (event.target === event.currentTarget) setModalIndex(null);
            }}
          >
            <button className="album-modal__close" type="button" aria-label="Закрыть" onClick={() => setModalIndex(null)}>
              ×
            </button>
            <button className="album-modal__nav album-modal__nav--prev" type="button" aria-label="Предыдущий кадр" onClick={showPrevious}>
              ‹
            </button>
            <div className="album-modal__media">
              <div className="album-modal__stars" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index}>✦</span>
                ))}
              </div>
              {isModalMediaLoading && (
                <div className="album-modal__loader" aria-label="Загрузка кадра" role="status">
                  <span />
                </div>
              )}
              {modalItem.type === 'video' ? (
                <video
                  className={isModalMediaLoading ? 'album-modal__media-main is-loading' : 'album-modal__media-main'}
                  autoPlay
                  controls
                  loop
                  muted
                  onCanPlay={() => setIsModalMediaLoading(false)}
                  onLoadedData={() => setIsModalMediaLoading(false)}
                  playsInline
                  src={modalItem.src}
                />
              ) : (
                <img
                  className={isModalMediaLoading ? 'album-modal__media-main is-loading' : 'album-modal__media-main'}
                  alt={modalItem.title}
                  onLoad={() => setIsModalMediaLoading(false)}
                  src={modalItem.src}
                />
              )}
            </div>
            <button className="album-modal__nav album-modal__nav--next" type="button" aria-label="Следующий кадр" onClick={showNext}>
              ›
            </button>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}

export default PhotoAlbumSection;
