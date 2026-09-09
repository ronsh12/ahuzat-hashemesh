'use client';
import { useState } from 'react';
import { Maximize2, X, ArrowRight, ArrowLeft } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { reviews } from './reviews';
export default function GuestReviews() {
  const [active, setActive] = useState<number | null>(null);
  const review = active === null ? null : reviews[active];
  const move = (step: number) =>
    setActive((i) =>
      i === null ? null : (i + step + reviews.length) % reviews.length,
    );
  return (
    <>
      <div className="guest-reviews-grid">
        {reviews.map((r, i) => (
          <button
            className="guest-review-card"
            key={r.image}
            onClick={() => setActive(i)}
            aria-label={`פתיחת חוות הדעת של ${r.name}`}
          >
            <img
              src={r.image}
              width={r.width}
              height={r.height}
              loading="lazy"
              decoding="async"
              alt={`צילום חוות דעת של ${r.name}: ${r.text}`}
            />
            <span>
              לקריאת חוות הדעת
              <Maximize2 size={16} />
            </span>
          </button>
        ))}
      </div>
      <Dialog
        open={review !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent
          className="review-dialog"
          showCloseButton={false}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              move(1);
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <DialogClose className="review-close" aria-label="סגירת חוות הדעת">
            <X size={22} />
          </DialogClose>
          {review && (
            <>
              <DialogTitle className="review-dialog-title">
                חוות הדעת של <bdi>{review.name}</bdi>
              </DialogTitle>
              <DialogDescription className="review-description">
                צילום חוות הדעת המקורית ותמלול לקריאה נוחה.
              </DialogDescription>
              <div className="review-dialog-scroll">
                <img
                  src={review.image}
                  width={review.width}
                  height={review.height}
                  alt={`צילום חוות הדעת המקורית של ${review.name}`}
                />
                <blockquote className="review-transcript">
                  {review.text}
                </blockquote>
              </div>
              <div className="review-controls">
                <button onClick={() => move(-1)} aria-label="חוות הדעת הקודמת">
                  <ArrowRight size={21} />
                </button>
                <span aria-live="polite">
                  {(active ?? 0) + 1} מתוך {reviews.length}
                </span>
                <button onClick={() => move(1)} aria-label="חוות הדעת הבאה">
                  <ArrowLeft size={21} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
