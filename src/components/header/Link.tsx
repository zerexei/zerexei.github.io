export interface NavigationLinkType {
  id: number;
  label: string;
  url: string;
}

type LinkProps = {
  url: string;
  label: string;
  css?: string;
  activeCss?: string;
};

const Link = ({ url, label, css, activeCss }: LinkProps) => {
  // @test
  activeCss = url === '#home' ? 'text-primary--dark' : '';

  return (
    <a href={url} className={`${css} ${activeCss}`}>
      {label}
    </a>
  );
};

export default Link;
