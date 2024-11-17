export default function Metadata({ seoTitle, seoDescription }) {
    return (
      <>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </>
    );
  }