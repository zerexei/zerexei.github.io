export interface NavigationLinkType {
  id: number;
  label: string;
  url: string;
}

type LinkProps = {
  url: string;
  label: string;
  css: string;
};

const Link = ({ url, label, css }: LinkProps) => {
  return (
    <a href={url} className={css}>
      {label}
    </a>
  );
};

export default Link;
