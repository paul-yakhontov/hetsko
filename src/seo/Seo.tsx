import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
};

export function Seo({
  title = 'Геодезичні та землевпорядні послуги',
  description = 'Професійні геодезичні та землевпорядні послуги по всій Україні. Швидко, точно, офіційно.',
  ogImage = '/og.jpg',
  url = ''
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={ogImage}/>
      <meta property="og:url" content={url}/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Helmet>
  );
}
