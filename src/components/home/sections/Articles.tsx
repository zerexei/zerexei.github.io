import Card, { TagType } from "../../Card";
import Section from "../../Section";

import articles from "../../data/articles.json";

interface ArticleType {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: TagType[];
}

const Articles = () => {
  return (
    <Section
      title="Articles"
      moreItemsUrl="https://medium.com/@angeloarcillas64"
    >
      {articles.map((article: ArticleType) => {
        return (
          <Card
            key={article.id}
            name={article.name}
            description={article.description}
            url={article.url}
            tags={article.tags}
          />
        );
      })}
    </Section>
  );
};

export default Articles;
