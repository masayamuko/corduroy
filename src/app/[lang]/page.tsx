import { notFound } from 'next/navigation'

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (lang === 'ja') {
    const PageComponent = require('./page.ja.tsx').default;
    return <PageComponent />;
  } else if (lang === 'en') {
    const PageComponent = require('./page.en.tsx').default;
    return <PageComponent />;
  } else {
    notFound();
  }
}
