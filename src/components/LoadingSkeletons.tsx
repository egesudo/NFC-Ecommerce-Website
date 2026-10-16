import React from 'react';
import { Wifi, Sparkles, RotateCw, ShoppingBag } from 'lucide-react';

/**
 * ProductCardSkeleton
 * Pixel-perfect skeleton component mirroring ProductCard.tsx
 */
export const ProductCardSkeleton: React.FC = () => {
  return (
    <div 
      className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden flex flex-col shadow-xs select-none"
      aria-hidden="true"
    >
      {/* Visual Slot Skeleton */}
      <div className="relative bg-[#F8FAFC] p-5 sm:p-6 flex flex-col items-center justify-center border-b border-[#E2E8F0]">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between z-10 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl skeleton-shimmer" />
            <div className="w-20 h-5 rounded-full skeleton-shimmer-subtle" />
          </div>
          <div className="w-28 h-5 rounded-full skeleton-shimmer-subtle" />
        </div>

        {/* Card Silhouette */}
        <div className="w-full max-w-[260px] aspect-[1.58/1] rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 flex flex-col justify-between shadow-2xs my-2 relative overflow-hidden skeleton-shimmer-subtle">
          {/* Card header shimmer */}
          <div className="flex items-center justify-between">
            <div className="w-6 h-6 rounded-md bg-[#E2E8F0]" />
            <Wifi className="w-4 h-4 text-slate-300 -rotate-90" />
          </div>

          {/* Card center chip & contactless placeholder */}
          <div className="flex items-center justify-center gap-2 my-auto opacity-40">
            <div className="w-7 h-5 rounded border border-slate-300 bg-slate-200" />
            <div className="w-16 h-2 rounded bg-slate-200" />
          </div>

          {/* Card footer details */}
          <div className="flex items-center justify-between">
            <div className="w-20 h-2 rounded bg-[#E2E8F0]" />
            <div className="w-6 h-2 rounded bg-[#E2E8F0]" />
          </div>
        </div>

        {/* Hover hint bar placeholder */}
        <div className="w-44 h-4 rounded-full skeleton-shimmer-subtle mt-2" />
      </div>

      {/* Content & Metadata Skeleton */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta line */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-16 h-3 rounded skeleton-shimmer-subtle" />
            <span className="text-slate-300">·</span>
            <div className="w-14 h-3 rounded skeleton-shimmer-subtle" />
            <span className="text-slate-300">·</span>
            <div className="w-20 h-3 rounded skeleton-shimmer-subtle" />
          </div>

          {/* Title */}
          <div className="w-4/5 h-5 rounded-md skeleton-shimmer mb-2" />
          
          {/* Subtitle / Description lines */}
          <div className="space-y-1.5 mt-2">
            <div className="w-full h-3 rounded skeleton-shimmer-subtle" />
            <div className="w-5/6 h-3 rounded skeleton-shimmer-subtle" />
          </div>

          {/* Specs / Dimensions */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-20 h-3 rounded skeleton-shimmer-subtle" />
            <span className="text-slate-300">·</span>
            <div className="w-24 h-3 rounded skeleton-shimmer-subtle" />
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 mt-5 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
          <div>
            <div className="w-24 h-6 rounded-md skeleton-shimmer mb-1" />
            <div className="w-28 h-2.5 rounded skeleton-shimmer-subtle" />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-22 h-8 rounded-xl skeleton-shimmer-subtle" />
            <div className="w-9 h-8 rounded-xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ProductCatalogSkeleton
 * Grid of skeletons for catalog initial load or category transition
 */
interface ProductCatalogSkeletonProps {
  count?: number;
}

export const ProductCatalogSkeleton: React.FC<ProductCatalogSkeletonProps> = ({ count = 6 }) => {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="status"
      aria-label="Ürünler yükleniyor..."
    >
      {Array.from({ length: count }).map((_, idx) => (
        <ProductCardSkeleton key={`catalog-skeleton-${idx}`} />
      ))}
      <span className="sr-only">Ürün modelleri yükleniyor...</span>
    </div>
  );
};

/**
 * HeroCardSkeleton
 * Skeleton for Hero section right column spotlight card box
 */
export const HeroCardSkeleton: React.FC = () => {
  return (
    <div 
      className="w-full max-w-[360px] p-6 bg-white rounded-3xl border border-[#E2E8F0] shadow-xl backdrop-blur-xs flex flex-col items-center"
      aria-hidden="true"
    >
      {/* Title & price header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="w-36 h-4 rounded-md skeleton-shimmer" />
        <div className="w-14 h-4 rounded-md skeleton-shimmer" />
      </div>

      {/* 360 Viewer Placeholder Box */}
      <div className="w-full aspect-[1.4/1] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 flex flex-col justify-between skeleton-shimmer-subtle">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 rounded-lg bg-slate-200" />
          <RotateCw className="w-4 h-4 text-slate-300 animate-spin" />
        </div>

        <div className="flex flex-col items-center justify-center my-auto">
          <div className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center mb-1.5 shadow-2xs">
            <Wifi className="w-5 h-5 text-slate-400 -rotate-90" />
          </div>
          <div className="w-24 h-2 rounded bg-slate-200" />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-16 h-2 rounded bg-slate-200" />
          <div className="w-10 h-2 rounded bg-slate-200" />
        </div>
      </div>

      {/* Bottom CTA Skeleton */}
      <div className="w-full h-10 rounded-xl skeleton-shimmer mt-4" />
    </div>
  );
};

/**
 * ProductDetailSkeleton
 * Skeleton for PDP Modal while product details initialize
 */
export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div 
      className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto"
      role="status"
      aria-label="Ürün detayları yükleniyor..."
    >
      {/* Left Column Skeleton */}
      <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
        <div className="my-auto flex flex-col items-center w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-24 h-6 rounded-full skeleton-shimmer-subtle" />
            <div className="w-44 h-6 rounded-full skeleton-shimmer-subtle" />
          </div>

          <div className="w-full max-w-[340px] aspect-[1.58/1] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs skeleton-shimmer-subtle flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-lg bg-slate-200" />
              <div className="w-5 h-5 rounded-full bg-slate-200" />
            </div>
            <div className="w-32 h-3 rounded bg-slate-200 mx-auto" />
            <div className="flex justify-between items-center">
              <div className="w-20 h-2 rounded bg-slate-200" />
              <div className="w-10 h-2 rounded bg-slate-200" />
            </div>
          </div>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-3 gap-3 pt-4 mt-6 border-t border-[#E2E8F0]">
          <div className="p-3 bg-white rounded-2xl border border-[#E2E8F0] h-16 skeleton-shimmer-subtle" />
          <div className="p-3 bg-white rounded-2xl border border-[#E2E8F0] h-16 skeleton-shimmer-subtle" />
          <div className="p-3 bg-white rounded-2xl border border-[#E2E8F0] h-16 skeleton-shimmer-subtle" />
        </div>
      </div>

      {/* Right Column Skeleton */}
      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl skeleton-shimmer" />
            <div>
              <div className="w-32 h-3.5 rounded skeleton-shimmer mb-1" />
              <div className="w-24 h-3 rounded skeleton-shimmer-subtle" />
            </div>
          </div>

          <div className="w-4/5 h-7 rounded-md skeleton-shimmer mb-2" />
          <div className="w-3/5 h-4 rounded skeleton-shimmer-subtle mb-4" />

          <div className="w-32 h-9 rounded-md skeleton-shimmer mb-6" />

          {/* Tabs header */}
          <div className="flex gap-4 border-b border-[#E2E8F0] pb-2 mb-4">
            <div className="w-32 h-4 rounded skeleton-shimmer" />
            <div className="w-24 h-4 rounded skeleton-shimmer-subtle" />
          </div>

          {/* Text lines */}
          <div className="space-y-2">
            <div className="w-full h-3 rounded skeleton-shimmer-subtle" />
            <div className="w-full h-3 rounded skeleton-shimmer-subtle" />
            <div className="w-4/5 h-3 rounded skeleton-shimmer-subtle" />
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-6 border-t border-[#E2E8F0] space-y-2.5">
          <div className="w-full h-12 rounded-xl skeleton-shimmer" />
          <div className="w-full h-10 rounded-xl skeleton-shimmer-subtle" />
        </div>
      </div>
    </div>
  );
};
