declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

  type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    className?: string;
    style?: React.CSSProperties;
    sizes?: string;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  } & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'>;

  const Image: React.FC<ImageProps>;
  export default Image;
}
