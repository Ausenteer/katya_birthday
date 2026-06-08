import { PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from 'react';
import katyaBaseDoll from '../assets/katya-lemon-doll.png';
import lemonSweatshirtCard from '../assets/lemon-sweatshirt-cutout.webp';
import lemonSweatshirtOverlay from '../assets/lemon-sweatshirt-pose-cutout.webp';
import { dressUpPresets } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

const DEFAULT_POS = { x: 50, y: 34 };
const X_MIN = 15, X_MAX = 85, Y_MIN = 8, Y_MAX = 74;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function DressUpKatya() {
  const revealRef = useReveal<HTMLElement>();
  const dollRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const activePointerId = useRef<number | null>(null);

  const [sweaterApplied, setSweaterApplied] = useState(false);
  const [sweaterPos, setSweaterPos] = useState(DEFAULT_POS);
  const [isDragOver, setIsDragOver] = useState(false);
  const [ghostPos, setGhostPos] = useState<{ x: number; y: number } | null>(null);
  const [isRepositioning, setIsRepositioning] = useState(false);

  const selectedPreset = dressUpPresets[0];

  useEffect(() => () => { cleanupRef.current?.(); }, []);

  const removeSweater = () => {
    setSweaterApplied(false);
    setSweaterPos(DEFAULT_POS);
  };

  // Drag sweatshirt card → drop onto doll
  const onCardPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (sweaterApplied || activePointerId.current !== null) return;
    e.preventDefault();
    activePointerId.current = e.pointerId;
    setGhostPos({ x: e.clientX, y: e.clientY });

    const onMove = (ev: PointerEvent) => {
      if (ev.pointerId !== activePointerId.current) return;
      setGhostPos({ x: ev.clientX, y: ev.clientY });
      if (dollRef.current) {
        const r = dollRef.current.getBoundingClientRect();
        setIsDragOver(
          ev.clientX >= r.left && ev.clientX <= r.right &&
          ev.clientY >= r.top  && ev.clientY <= r.bottom,
        );
      }
    };

    const onEnd = (ev: PointerEvent) => {
      if (ev.pointerId !== activePointerId.current) return;
      doCleanup();
      if (dollRef.current) {
        const r = dollRef.current.getBoundingClientRect();
        if (
          ev.clientX >= r.left && ev.clientX <= r.right &&
          ev.clientY >= r.top  && ev.clientY <= r.bottom
        ) {
          setSweaterPos(DEFAULT_POS);
          setSweaterApplied(true);
        }
      }
    };

    const doCleanup = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
      cleanupRef.current = null;
      activePointerId.current = null;
      setGhostPos(null);
      setIsDragOver(false);
    };

    cleanupRef.current = doCleanup;
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
  };

  // Drag applied overlay → reposition
  const onOverlayPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!sweaterApplied || activePointerId.current !== null) return;
    e.preventDefault();
    activePointerId.current = e.pointerId;
    setIsRepositioning(true);

    const onMove = (ev: PointerEvent) => {
      if (ev.pointerId !== activePointerId.current || !dollRef.current) return;
      const r = dollRef.current.getBoundingClientRect();
      setSweaterPos({
        x: clamp(((ev.clientX - r.left) / r.width) * 100, X_MIN, X_MAX),
        y: clamp(((ev.clientY - r.top) / r.height) * 100, Y_MIN, Y_MAX),
      });
    };

    const onEnd = (ev: PointerEvent) => {
      if (ev.pointerId !== activePointerId.current) return;
      doCleanup();
    };

    const doCleanup = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
      cleanupRef.current = null;
      activePointerId.current = null;
      setIsRepositioning(false);
    };

    cleanupRef.current = doCleanup;
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
  };

  return (
    <section className="section reveal dress-up" id="dress" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Dress Katya</p>
        <h2>Одень Катю на идеальный день</h2>
        <p>
          Перед тобой важная fashion-BI задача: собрать образ, в котором Катя сможет быть красивой,
          умной, продуктивной, любимой — и желательно не переработать.
        </p>
        <p className="dress-up__rule">Главное правило: свитер с лимонами всегда считается fashion statement.</p>
      </div>

      <div className="dress-up__grid">
        <div className={`outfit-preview outfit-preview--${selectedPreset.accent}${isDragOver ? ' is-drop-target' : ''}`}>
          <div className="outfit-preview__bg">
            <span className="outfit-preview__sun" />
            <span className="outfit-preview__chart" />
            <span className="outfit-preview__spark outfit-preview__spark--one" />
            <span className="outfit-preview__spark outfit-preview__spark--two" />
          </div>

          {/* Doll — не меняется */}
          <div className={`katya-doll katya-doll--image${isDragOver ? ' is-drop-target' : ''}`} ref={dollRef}>
            <img alt="Катя" src={katyaBaseDoll} />

            {/* Наложенный свитшот — появляется после дропа */}
            {sweaterApplied && (
              <button
                aria-label="Перетащить свитшот"
                className={`katya-doll__sweatshirt-overlay${isRepositioning ? ' is-repositioning' : ''}`}
                onPointerDown={onOverlayPointerDown}
                style={{ left: `${sweaterPos.x}%`, top: `${sweaterPos.y}%` }}
                type="button"
              >
                <img alt="" aria-hidden="true" src={lemonSweatshirtOverlay} />
              </button>
            )}
          </div>

          {isDragOver && !sweaterApplied && (
            <div className="outfit-preview__drop-hint">
              <span>Отпусти здесь ✨</span>
            </div>
          )}

          {sweaterApplied && (
            <div className="outfit-preview__caption">
              <div className="outfit-preview__actions">
                <button className="button button--ghost" onClick={removeSweater} type="button">
                  Снять свитшот
                </button>
              </div>
            </div>
          )}

          {!sweaterApplied && (
            <div className="wardrobe-dock" aria-label="Гардероб">
              <button
                aria-label="Свитшот с лимонами — перетащи на Катю"
                className={`wardrobe-floating-item wardrobe-floating-item--photo${ghostPos ? ' is-dragging' : ''}`}
                onPointerDown={onCardPointerDown}
                type="button"
              >
                <img alt="Свитшот с лимонами" src={lemonSweatshirtCard} />
                <span>Перетащи на Катю →</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ghost-изображение следует за курсором во время тасканья */}
      {ghostPos && (
        <div
          aria-hidden="true"
          className="dress-up__ghost"
          style={{ left: ghostPos.x, top: ghostPos.y }}
        >
          <img alt="" src={lemonSweatshirtCard} />
        </div>
      )}
    </section>
  );
}

export default DressUpKatya;
